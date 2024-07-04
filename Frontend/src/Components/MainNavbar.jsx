import React from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav className="navbar" style={styles.navbar}>
      <div className="container" style={styles.container}>
        <div className="logo" style={styles.logo}>
          <img src="logo.png" alt="HealthTrack Logo" style={{ width: '120px', marginRight: '10px' }} />
          HealthTrack
        </div>
        <div className="navLinks" style={styles.navLinks}>
          <div className="links" style={styles.links}>
            <Link to="" style={styles.link}>Home</Link>
            
            <Link to="/aboutus" style={styles.link}>About Us</Link>
            <Link to="/services" style={styles.link}>Services</Link>
          </div>
          <div className="loginButton" style={styles.loginButton}>
            <Link to="/login" style={styles.loginLink}>LOGIN</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'none',
    position: 'absolute',
    alignItems: 'center',
    borderBottomRightRadius: '7px',
    borderBottomLeftRadius: '7px',
    paddingTop: '20px',
    paddingBottom: '20px',
    zIndex: '2',
    backgroundColor: 'transparent',
    top: '0',
    left: '0',
    padding: '15px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: '#222',
    textDecoration: 'none',
  },
  navLinks: {
    flex: '2',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    textDecoration: 'none',
    color: '#222',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '1.4px',
  },
  loginButton: {
    padding: '8px 20px',
    color: '#e5e5e5',
    background: '#333333',
    border: 'none',
    borderRadius: '20px',
    fontSize: '20px',
    fontWeight: '600',
    zIndex: '2',
  },
  loginLink: {
    textDecoration: 'none',
    color: '#e5e5e5',
    transition: '0.3s',
    cursor: 'pointer',
  },
};

export default MainNavbar;
