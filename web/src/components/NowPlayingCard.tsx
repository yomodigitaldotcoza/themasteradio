import { NextIcon, PlayIcon, PrevIcon, ListenerIcon, VolumeIcon } from "./icons";
import { Waveform } from "./Waveform";

export function NowPlayingCard() {
  return (
    <div className="npcard">
      <div className="nphead">
        <h3>NOW PLAYING</h3>
        <span className="livetag">● LIVE</span>
      </div>
      <div className="npbody">
        <div className="art art-house">
          <span className="t">
            The Master
            <small>
              DEEP HOUSE MIX
              <br />
              NOVEMBER 2020
            </small>
          </span>
        </div>
        <div className="npinfo">
          <div className="title">Deep House Mix November 2020</div>
          <div className="artist">The Master</div>
          <Waveform />
          <div className="npmeta">
            <span>
              <ListenerIcon />12 listeners
            </span>
            <span>• 192 kbps</span>
            <span className="heart">♡</span>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="cbtn" type="button" aria-label="Previous">
          <PrevIcon />
        </button>
        <button className="playbig" type="button" aria-label="Play">
          <PlayIcon />
        </button>
        <button className="cbtn" type="button" aria-label="Next">
          <NextIcon />
        </button>
        <div className="vol">
          <VolumeIcon />
          <div className="volbar" />
        </div>
      </div>
      <div className="upnext">
        <div>
          <small>UP NEXT</small>
          <b>Straight Outta 90s</b> <span>• The Master</span>
        </div>
        <div className="time">17:58</div>
      </div>
    </div>
  );
}
