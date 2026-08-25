import { AVATAR_URL } from "@/data/site";

export function AboutCard() {
  return (
    <div className="aboutcard">
      <div className="aboutimg" style={{ backgroundImage: `url('${AVATAR_URL}')` }} />
      <div className="abouttxt">
        <small>THE MASTER&apos;S WORLD</small>
        <h3>
          Born in Mzansi.
          <br />
          Built for the sound.
        </h3>
        <p>
          From the dusty crates of old-school hip hop to the deepest house grooves, The Master Radio brings you the
          records that shaped a generation and continue to move us today. 24/7. Non-stop. Real music. No fillers.
        </p>
        <a className="btn o" href="#" style={{ padding: "11px 18px", fontSize: "12px" }}>
          MORE ABOUT THE MASTER
        </a>
      </div>
    </div>
  );
}
