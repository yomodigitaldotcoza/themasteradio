"use client";

import { useEffect, useState } from "react";
import { getOnAirShow } from "@/lib/schedule";
import { NextIcon, PlayIcon, PrevIcon } from "./icons";

export function BottomPlayer() {
  const [show, setShow] = useState(() => getOnAirShow().name);

  useEffect(() => {
    const t = setInterval(() => setShow(getOnAirShow().name), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bplayer">
      <div className="bin">
        <span className="live">LIVE</span>
        <div className="tt">
          <b suppressHydrationWarning>{show}</b>
          <span>Deep House Mix November 2020</span>
        </div>
        <div className="spacer" />
        <div className="bctrl">
          <button className="cbtn" type="button" aria-label="Previous">
            <PrevIcon />
          </button>
          <button className="playbig" type="button" aria-label="Play">
            <PlayIcon />
          </button>
          <button className="cbtn" type="button" aria-label="Next">
            <NextIcon />
          </button>
          <div className="bvol" />
          <div className="listening">
            <b>12</b>
            <small>LISTENING</small>
          </div>
          <a className="totop" href="#home">
            ↑
          </a>
        </div>
      </div>
    </div>
  );
}
