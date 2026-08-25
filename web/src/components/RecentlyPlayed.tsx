import { RECENT } from "@/data/site";
import { PlayIcon } from "./icons";
import { SectionHead } from "./SectionHead";

export function RecentlyPlayed() {
  return (
    <section id="shows">
      <SectionHead title="Recently Played" linkLabel="VIEW ALL" />
      <div className="cards">
        {RECENT.map((track) => (
          <div className="rcard" key={track.slug}>
            <div className={`rart ${track.artClass}`}>
              <span className="t">
                {track.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < track.lines.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
            <div className="rmeta">
              <div>
                <small>{track.time}</small>
                <b>{track.title}</b>
                <span>{track.artist}</span>
              </div>
              <button className="rplay" type="button" aria-label={`Play ${track.title}`}>
                <PlayIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
