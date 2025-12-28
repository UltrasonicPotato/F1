import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';

export function Header() {
  const [textColor, setTextColor] = useState('text-white');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let sections = [];
      if (pathname === '/') {
        sections = [
          { id: 'hero-section', color: 'text-white' },
          { id: 'about-summary', color: 'text-black' },
          { id: 'team-summary', color: 'text-black' },
          { id: 'car-summary', color: 'text-black' },
          { id: 'sponsors-summary', color: 'text-black' },
        ];
      } else if (pathname === '/about') {
        sections = [
          { id: 'about-hero', color: 'text-white' },
          { id: 'about-values', color: 'text-black' },
        ];
      } else {
        setTextColor('text-black');
        return;
      }

      const scrollPosition = window.scrollY;
      const navbarHeight = 80; // Assuming the navbar height is 80px

      let newColor = 'text-black'; // Default to black for other pages

      if (sections.length > 0) {
        newColor = sections[0].color; // Default to the first section's color
        for (let i = 0; i < sections.length; i++) {
          const currentSection = document.getElementById(sections[i].id);
          if (currentSection) {
            const currentSectionTop = currentSection.offsetTop - navbarHeight;
            if (scrollPosition >= currentSectionTop) {
              newColor = sections[i].color;
            }
          }
        }
      }
      
      setTextColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll on mount to set initial color

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return <Navbar textColor={textColor} />;
}
