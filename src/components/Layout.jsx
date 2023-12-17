import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/Layout.css';
import { useTheme } from '../ThemeContext';
function Layout({ children }) {
  const [theme] = useTheme();
  return (
    <div className={`layout ${theme === 'dark' ? 'dark' : ''}`}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;