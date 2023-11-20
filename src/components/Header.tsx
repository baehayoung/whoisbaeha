import Link from 'next/link';

import css from '../styles/globals.scss';

const Header = () => (
  <header className={css.Header}>
    Who is Baeha?
    <nav>
      <ul className={css.menuBar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/ref">Ref</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
