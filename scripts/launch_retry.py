import json
import socket
import sys
import time

import oci

config = oci.config.from_file()
compartment = config["tenancy"]
AD = "MvwN:AF-JOHANNESBURG-1-AD-1"
IMAGE_ARM = "ocid1.image.oc1.af-johannesburg-1.aaaaaaaajf6lptp6t7xzagluwdtlq4gs3mh5xnhdhwc7cifrx7gjiy4ndweq"
SUBNET = "ocid1.subnet.oc1.af-johannesburg-1.aaaaaaaan5d3a5unfwurj422ycyluvthpbkxosewmzbbbqt7mm5uutnguhla"

with open(r"C:\Users\PC\.ssh\themasterradio.pub") as f:
    PUBKEY = f.read().strip()

compute = oci.core.ComputeClient(config)

VARIANTS = [
    ("A1-4ocpu-24gb", "VM.Standard.A1.Flex", {"ocpus": 4, "memory_in_gbs": 24}),
    ("A1-2ocpu-12gb", "VM.Standard.A1.Flex", {"ocpus": 2, "memory_in_gbs": 12}),
]


def attempt(label, shape, shape_config):
    kw = {
        "availability_domain": AD,
        "compartment_id": compartment,
        "display_name": "themasterradio",
        "shape": shape,
        "source_details": oci.core.models.InstanceSourceViaImageDetails(
            image_id=IMAGE_ARM, boot_volume_size_in_gbs=50
        ),
        "create_vnic_details": oci.core.models.CreateVnicDetails(
            subnet_id=SUBNET,
            assign_public_ip=True,
            display_name="tmradio-vnic",
            hostname_label="themasterradio",
        ),
        "metadata": {"ssh_authorized_keys": PUBKEY},
        "freeform_tags": {"project": "themasterradio"},
    }
    if shape_config:
        kw["shape_config"] = oci.core.models.LaunchInstanceShapeConfigDetails(**shape_config)
    try:
        resp = compute.launch_instance(oci.core.models.LaunchInstanceDetails(**kw))
        print(json.dumps({"status": "LAUNCHED", "variant": label, "instance_id": resp.data.id}), flush=True)
        return True
    except oci.exceptions.ServiceError as e:
        msg = getattr(e, "message", "") or str(e)
        print(f"{time.strftime('%H:%M:%S')} {label}: HTTP {e.status} {msg}", flush=True)
        if e.status == 429:
            return "rate"
        if e.status != 500 or "capacity" not in msg.lower():
            print("NON-CAPACITY ERROR - aborting", flush=True)
            sys.exit(2)
        return "capacity"
    return False


try:
    _lock = socket.socket()
    _lock.bind(("127.0.0.1", 39157))
    _lock.listen(1)
except OSError:
    print("lock port 39157 busy - another launch_retry.py instance is running, exiting", flush=True)
    sys.exit(3)

n = 0
while True:
    n += 1
    for label, shape, sc in VARIANTS:
        print(f"attempt {n} -> {label}", flush=True)
        result = attempt(label, shape, sc)
        if result is True:
            sys.exit(0)
        time.sleep(240 if result == "rate" else 45)
    time.sleep(120)
