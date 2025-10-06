import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Header provides a simple, neutral navigation bar with links across the app.
 * Uses NavLink for active route highlighting and minimal inline styling to avoid CSS conflicts.
 */
function Header() {
  const styles = {
    wrapper: {
      width: '100%',
      background: 'transparent',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backdropFilter: 'saturate(1.2)',
    },
    nav: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 14,
      lineHeight: '20px',
    },
    brand: {
      fontWeight: 700,
      color: 'inherit',
      textDecoration: 'none',
    },
    links: {
      display: 'flex',
      gap: 16,
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
      padding: '6px 10px',
      borderRadius: 6,
      transition: 'background 0.2s ease',
    },
    active: {
      background: 'rgba(0,0,0,0.06)',
    },
  };

  const getLinkStyle = ({ isActive }) => ({
    ...styles.link,
    ...(isActive ? styles.active : null),
  });

  return (
    <header style={styles.wrapper}>
      <nav style={styles.nav} aria-label="Main Navigation">
        <NavLink to="/" style={styles.brand}>
          Coffee Shop
        </NavLink>
        <div style={styles.links}>
          <NavLink to="/" style={getLinkStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" style={getLinkStyle}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
