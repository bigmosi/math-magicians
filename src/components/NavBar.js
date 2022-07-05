import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <>
    <nav className={styles.container}>
      <h2>Math Magicians</h2>
      <ul className={styles.subcontainer}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className={styles.li}>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default NavBar;
