import React from 'react';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import { useTheme } from './ThemeContext';
import './styles/main.css';
import Header from './components/Header';

function MainPage() {
  const [theme] = useTheme();
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header />
      <Specials />
      <Testimonials />

    </div>
  );
}

export default MainPage;
