import { BroadcastIcon, HeadphonesIcon, UsersIcon } from "./icons";
import { HEARTHTIS_URL } from "@/data/site";
import { NowPlayingCard } from "./NowPlayingCard";

export function Hero() {
  return (
    <header className="hero" id="home">
      <div className="container herogrid">
        <div>
          <span className="livebadge">
            <span className="dot" /> LIVE ON AIR
          </span>
          <h1 className="herotitle">
            <span className="w">The</span>
            <span className="y">Master</span>
            <span className="w">Radio</span>
          </h1>
          <p className="tagline">Your soundtrack. 24/7.</p>
          <p className="genres">OLD-SCHOOL HIP HOP • HOUSE • DISCO • SOUL • LOUNGE</p>
          <div className="stats">
            <div className="stat">
              <UsersIcon />
              <div>
                <b>12</b>
                <small>LISTENING NOW</small>
              </div>
            </div>
            <div className="stat">
              <HeadphonesIcon />
              <div>
                <b>3,842</b>
                <small>PLAYS THIS MONTH</small>
              </div>
            </div>
            <div className="stat">
              <BroadcastIcon />
              <div>
                <b style={{ fontSize: "12.5px" }}>BROADCASTING</b>
                <small>FROM MZANSI 🇿🇦</small>
              </div>
            </div>
          </div>
          <div className="cta">
            <a className="btn y" href="#">
              ▶ LISTEN LIVE
            </a>
            <a className="btn o" href="#request">
              💬 REQUEST A TRACK
            </a>
          </div>
          <div className="follow">
            FOLLOW US
            <a href="#" title="Instagram">
              📸
            </a>
            <a href="#" title="TikTok">
              🎵
            </a>
            <a href="#" title="Facebook">
              👍
            </a>
            <a href="#request" title="WhatsApp">
              💬
            </a>
            <a href={HEARTHTIS_URL} target="_blank" rel="noopener" title="hearthis.at">
              🎧
            </a>
          </div>
        </div>

        <NowPlayingCard />
      </div>
    </header>
  );
}
