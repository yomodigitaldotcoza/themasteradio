export function NavBar() {
  return (
    <nav>
      <div className="container navin">
        <a className="logo" href="#home">
          <span className="crown">♛</span>
          <b>
            MASTER
            <br />
            <span>⚡ RADIO ⚡</span>
          </b>
        </a>
        <ul className="navlinks">
          <li>
            <a className="active" href="#home">
              HOME
            </a>
          </li>
          <li>
            <a href="#schedule">SCHEDULE</a>
          </li>
          <li>
            <a href="#shows">SHOWS</a>
          </li>
          <li>
            <a href="#request">REQUEST</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#request">CONTACT</a>
          </li>
        </ul>
        <div className="navright">
          <a className="livenow" href="#">
            <span className="dot" /> LIVE NOW
          </a>
          <button className="burger" type="button" aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
