// components/Header.js
import Link from 'next/link'


const headerStyle = {
  backgroundColor: "blue",
  color: "white",
  width: "100%",
  height: "50px"
};

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link href="/">
        <a className="navbar-item">
          TimeSheet
        </a>
      </Link>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link href="/project/list">
          <a className="navbar-item">
          Projects
          </a>
        </Link>

      </div>

    </div>
  </nav>
);

export default Header;