import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
import { MainHeaderBackground } from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="logo food" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <NavLink href="/community">Foodies Community</NavLink>
            <li> </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
