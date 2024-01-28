import Link from 'next/link';

import '../styles/globals.scss';

const Header = () => (
  <header className="Header">
    <div className="contents">
      <h2 className="title">Who is Baeha?</h2>
      <nav>
        <ul className={"menuBar"}>
          <li><Link href="#aboutme">About Me</Link></li>
          <li><Link href="#career">Career</Link></li>
          <li><Link href="#project">Project</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#ref">Ref</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
