import { getOnAirShow } from "@/lib/schedule";
import { BoomboxIcon, GlobeIcon, HomeIcon, RefreshIcon, SofaIcon } from "./icons";

const BADGE_CLASS = {
  house: "b-house",
  lounge: "b-lounge",
  hiphop: "b-hiphop",
  disco: "b-disco",
  rotation: "b-any"
} as const;

const BADGE_LABEL = {
  house: "HOUSE",
  lounge: "LOUNGE",
  hiphop: "HIP HOP",
  disco: "DISCO",
  rotation: "BEST OF EVERYTHING"
} as const;

const CARDS = [
  {
    id: "house" as const,
    day: "SATURDAY",
    title: "All-Day House",
    time: "00:00 – 23:59",
    iconColor: "c-teal",
    Icon: HomeIcon
  },
  {
    id: "lounge" as const,
    day: "SUNDAY",
    title: "Sunday Lounge Sessions",
    time: "00:00 – 23:59",
    iconColor: "c-green",
    Icon: SofaIcon
  },
  {
    id: "hiphop" as const,
    day: "MON – FRI",
    title: "Real Hip Hop Lives",
    time: "18:00 – 22:00",
    iconColor: "c-orange",
    Icon: BoomboxIcon
  },
  {
    id: "disco" as const,
    day: "FRIDAY",
    title: "Disco Heat",
    time: "22:00 – 00:00",
    iconColor: "c-yellow",
    Icon: GlobeIcon
  },
  {
    id: "rotation" as const,
    day: "ALL OTHER TIMES",
    title: "The Master Rotation",
    time: "24/7",
    iconColor: "c-purple",
    Icon: RefreshIcon
  }
];

export function ScheduleGrid() {
  const onAirId = getOnAirShow().id;
  return (
    <section id="schedule">
      <div className="sechead">
        <h2>This Week On Air</h2>
        <div className="rule" />
        <a href="#">
          FULL SCHEDULE →
        </a>
      </div>
      <div className="sched">
        {CARDS.map(({ id, day, title, time, iconColor, Icon }) => (
          <div className={`scard${id === onAirId ? " today" : ""}`} key={id}>
            <Icon className={iconColor} />
            <div className={`day ${iconColor}`}>{day}</div>
            <b>{title}</b>
            <span className="time">{time}</span>
            <span className={`badge ${BADGE_CLASS[id]}`}>{BADGE_LABEL[id]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
