import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../data/siteData';
import './Header.css';

function Logo({ dark = false }) {
  return (
    <svg width="90" height="46" viewBox="0 0 129 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.55 50V15H17.25C19.7167 15 21.7667 15.3833 23.4 16.15C25.0667 16.9167 26.3167 17.9833 27.15 19.35C27.9833 20.6833 28.4 22.2333 28.4 24C28.4 25.7667 28.0167 27.25 27.25 28.45C26.4833 29.65 25.4667 30.5667 24.2 31.2C22.9667 31.8333 21.6167 32.2167 20.15 32.35L20.9 31.8C22.4667 31.8333 23.8667 32.25 25.1 33.05C26.3667 33.85 27.3667 34.9 28.1 36.2C28.8333 37.4667 29.2 38.8833 29.2 40.45C29.2 42.2833 28.75 43.9333 27.85 45.4C26.9833 46.8333 25.7 47.9667 24 48.8C22.3 49.6 20.2167 50 17.75 50H3.55ZM9.55 45.1H16.85C18.8167 45.1 20.35 44.6333 21.45 43.7C22.55 42.7667 23.1 41.4667 23.1 39.8C23.1 38.1333 22.5333 36.8167 21.4 35.85C20.2667 34.85 18.7167 34.35 16.75 34.35H9.55V45.1ZM9.55 29.8H16.4C18.3333 29.8 19.8 29.3667 20.8 28.5C21.8 27.6 22.3 26.3667 22.3 24.8C22.3 23.2667 21.8 22.0667 20.8 21.2C19.8 20.3 18.3167 19.85 16.35 19.85H9.55V29.8ZM34.7465 50V14H40.7465V50H34.7465ZM47.6918 50V24.8H53.6918V50H47.6918ZM50.6918 20.8C49.5918 20.8 48.6751 20.4667 47.9418 19.8C47.2418 19.1 46.8918 18.25 46.8918 17.25C46.8918 16.2167 47.2418 15.3833 47.9418 14.75C48.6751 14.0833 49.5918 13.75 50.6918 13.75C51.7918 13.75 52.6918 14.0833 53.3918 14.75C54.1251 15.3833 54.4918 16.2167 54.4918 17.25C54.4918 18.25 54.1251 19.1 53.3918 19.8C52.6918 20.4667 51.7918 20.8 50.6918 20.8ZM60.8754 50V24.8H66.8754V50H60.8754ZM63.8754 20.8C62.7754 20.8 61.8587 20.4667 61.1254 19.8C60.4254 19.1 60.0754 18.25 60.0754 17.25C60.0754 16.2167 60.4254 15.3833 61.1254 14.75C61.8587 14.0833 62.7754 13.75 63.8754 13.75C64.9754 13.75 65.8754 14.0833 66.5754 14.75C67.3087 15.3833 67.6754 16.2167 67.6754 17.25C67.6754 18.25 67.3087 19.1 66.5754 19.8C65.8754 20.4667 64.9754 20.8 63.8754 20.8ZM72.159 50V45.15L85.209 29.8H72.359V24.8H92.109V29.65L78.909 45.05H92.359V50H72.159ZM109.681 50.6C107.181 50.6 104.981 50.0667 103.081 49C101.181 47.9 99.6979 46.3667 98.6313 44.4C97.5646 42.4333 97.0313 40.1667 97.0313 37.6C97.0313 34.9333 97.5479 32.6 98.5813 30.6C99.6479 28.6 101.131 27.0333 103.031 25.9C104.965 24.7667 107.198 24.2 109.731 24.2C112.198 24.2 114.348 24.75 116.181 25.85C118.015 26.95 119.431 28.4333 120.431 30.3C121.431 32.1333 121.931 34.2 121.931 36.5C121.931 36.8333 121.931 37.2 121.931 37.6C121.931 38 121.898 38.4167 121.831 38.85H101.331V35H115.881C115.815 33.1667 115.198 31.7333 114.031 30.7C112.865 29.6333 111.415 29.1 109.681 29.1C108.448 29.1 107.315 29.3833 106.281 29.95C105.248 30.5167 104.431 31.3667 103.831 32.5C103.231 33.6 102.931 35 102.931 36.7V38.15C102.931 39.7167 103.215 41.0667 103.781 42.2C104.381 43.3333 105.181 44.2 106.181 44.8C107.215 45.3667 108.365 45.65 109.631 45.65C111.031 45.65 112.181 45.35 113.081 44.75C114.015 44.15 114.698 43.35 115.131 42.35H121.231C120.765 43.9167 119.998 45.3333 118.931 46.6C117.865 47.8333 116.548 48.8167 114.981 49.55C113.415 50.25 111.648 50.6 109.681 50.6Z" fill={dark ? '#0a0a0a' : 'white'}/>
      <g clipPath="url(#c0)">
        <path d="M117.006 23.7061L115.93 23.0361C117.06 21.8453 118.389 19.3945 116.842 15.0584C116.842 15.0584 111.259 16.3934 110.672 19.7614L109.19 18.8389C108.029 15.7265 108.515 10.6438 121.542 7.781C121.542 7.781 126.047 21.6348 117.006 23.7061Z" fill={dark ? '#0a0a0a' : 'white'}/>
      </g>
      <g clipPath="url(#c1)">
        <path d="M100.67 23.7061L101.746 23.0361C100.615 21.8453 99.2867 19.3945 100.834 15.0584C100.834 15.0584 106.417 16.3934 107.004 19.7614L108.485 18.8389C109.647 15.7265 109.161 10.6438 96.1338 7.781C96.1338 7.781 91.6292 21.6348 100.67 23.7061Z" fill={dark ? '#0a0a0a' : 'white'}/>
      </g>
      <defs>
        <clipPath id="c0"><rect width="16.7536" height="16.7536" fill="white" transform="translate(114.532 2.92215) rotate(31.9131)"/></clipPath>
        <clipPath id="c1"><rect width="16.7536" height="16.7536" fill="white" transform="matrix(-0.848851 0.528632 0.528632 0.848851 103.144 2.92215)"/></clipPath>
      </defs>
    </svg>
  );
}

function EnvatoMarketLogo() {
  return (
    <svg fill="none" height="257" viewBox="0 0 1894 257" width="1894" xmlns="http://www.w3.org/2000/svg" style={{ height: '18px', width: 'auto' }}>
      <g fill="#fff5ed">
        <path d="m293.781 50.8298c38.37 0 75.87 22.62 75.87 73.0102 0 4-.22 10.2-.66 14.56-.1 1-.95 1.76-1.96 1.76h-107.62c3.15 18.04 15.75 29.78 35.5 29.78 13.1 0 21.46-7.24 26.01-15.9.57-1.09 1.81-1.66 3.01-1.4l40.24 8.77c1.23.27 1.88 1.59 1.38 2.74-9.41 21.31-30.81 42.43-70.92 42.43-52.68 0-80.74-34.36-80.74-77.88 0-43.5202 29.2-77.8802 79.88-77.8802zm30.92 61.8502c-2-17.1802-13.46-26.3402-30.06-26.3402-21.76 0-30.92 11.17-34.36 26.3402z"/>
        <path d="m383.4 200.04v-142.6502c0-1.09.88-1.97 1.97-1.97h41.87c1.09 0 1.97.88 1.97 1.97v16.9301c10.02-15.75 24.91-23.4801 44.09-23.4801 28.06 0 52.11 19.18 52.11 62.1302v87.07c0 1.09-.88 1.97-1.97 1.97h-41.87c-1.09 0-1.97-.88-1.97-1.97v-80.49c0-19.18-10.02-29.7801-24.62-29.7801-15.75 0-25.77 10.3101-25.77 33.7901v76.48c0 1.09-.88 1.97-1.97 1.97h-41.87c-1.09 0-1.97-.88-1.97-1.97z"/>
        <path d="m528.22 55.4098h44.41c.87 0 1.63.57 1.89 1.4l33.36 110.5502 33.36-110.5502c.25-.83 1.02-1.4 1.89-1.4h44.41c1.36 0 2.32 1.35 1.85 2.64l-51.08 142.1302c-.39 1.09-1.43 1.83-2.6 1.83h-55.67c-1.16 0-2.2-.73-2.6-1.83l-51.08-142.1302c-.46-1.28.49-2.64 1.85-2.64z"/>
        <path d="m786.541 200.04v-22.37c-7.16 14.89-23.19 28.92-48.1 28.92-28.92 0-50.39-18.32-50.39-44.09 0-27.2 18.04-47.53 57.55-47.53h22.91c12.6 0 16.03-9.16 14.89-15.1701-1.72-10.31-10.88-15.75-23.76-15.75-16.27 0-26.12 8.99-27.36 21.3701-.11 1.13-1.15 1.94-2.27 1.75l-38.84-6.47c-1.08-.18-1.82-1.2102-1.62-2.2802 6.33-33.79 38.37-47.58 71.25-47.58s69.29 8.02 69.29 68.7202v80.49c0 1.09-.88 1.97-1.97 1.97h-39.58c-1.09 0-1.97-.88-1.97-1.97zm-34.64-26.66c18.32 0 30.92-13.74 32.35-30.92h-27.77c-16.89 0-22.91 6.87-22.62 16.32.29 10.02 8.3 14.6 18.04 14.6z"/>
        <path d="m836.94 90.0898v-32.71c0-1.09.88-1.97 1.97-1.97h16.35c7.59 0 13.74-6.15 13.74-13.74v-25.52c0-1.09.88-1.97 1.97-1.97h37.29c1.09 0 1.97.88 1.97 1.97v39.26h30.101c1.09 0 1.969.88 1.969 1.97v32.71c0 1.09-.879 1.97-1.969 1.97h-30.101v52.9702c0 17.26 14.67 24.29 29.99 18.85 1.02-.36 2.08.41 2.08 1.48v34.51c0 1.27-.859 2.39-2.089 2.68-3.96.94-9.451 1.75-15.941 1.75-35.5 0-59.84-12.03-59.84-63.56v-48.6702h-25.52c-1.09 0-1.97-.88-1.97-1.97z"/>
        <path d="m1109.52 128.71c0 42.95-30.35 77.88-80.17 77.88-49.819 0-80.169-34.93-80.169-77.88 0-42.9502 30.35-77.8802 80.169-77.8802 49.82 0 80.17 34.93 80.17 77.8802zm-45.81 0c0-21.19-11.74-38.9402-34.36-38.9402s-34.359 17.7502-34.359 38.9402 11.739 38.94 34.359 38.94 34.36-17.75 34.36-38.94z"/>
      </g>
      <path d="m102.231 256.75c6.323 0 11.45-5.127 11.45-11.45 0-6.324-5.127-11.45-11.45-11.45-6.3239 0-11.4502 5.126-11.4502 11.45 0 6.323 5.1263 11.45 11.4502 11.45z" fill="#87e64b"/>
      <path d="m168.001 167.33-64.51 6.91c-1.18.13-1.79-1.38-.85-2.11l63.13-49.15c4.1-3.35 6.71-8.57 5.59-14.16-1.12-8.57-8.2-14.1601-17.14-13.0401l-68.5902 10.0401c-1.21.18-1.86-1.37-.89-2.11l67.9902-51.9101c13.42-10.43 14.53-30.9301 2.24-42.85005-11.18-11.18-29.07-10.80999-40.25.37001l-109.56021 111.42014c-4.1 4.47-5.959994 10.43-4.839994 16.77 1.860004 10.06 11.920004 16.77 21.990004 14.91l59.06-12.05c1.28-.26 1.98 1.45.87 2.15l-65.53 41.94c-8.2 5.22-11.92 14.53-9.32 23.85 2.61 12.3 14.91 19.38 26.83 16.4l97.9502-24.13c1.1-.27 1.91 1.01 1.2 1.89l-15.3 18.88c-4.1 5.22 2.61 12.3 8.2 8.2l50.31-41.36c8.94-7.45 2.98-21.99-8.57-20.87z" fill="#87e64b"/>
      <path d="m1155.36 200.04v-138.0498c0-1.09.88-1.97 1.97-1.97h14.38c1.09 0 1.97.88 1.97 1.97v18.64c8.87-15.46 20.61-22.9 36.64-22.9 20.61 0 32.92 9.45 40.94 28.63 9.16-19.18 21.76-28.63 41.51-28.63 24.33 0 45.8 13.17 45.8 56.9698v85.34c0 1.09-.88 1.97-1.97 1.97h-14.38c-1.09 0-1.97-.88-1.97-1.97v-88.49c0-26.0498-12.31-36.6398-31.49-36.6398s-32.63 14.03-32.63 39.2198v85.92c0 1.09-.88 1.97-1.97 1.97h-14.38c-1.09 0-1.97-.88-1.97-1.97v-88.49c0-26.0498-12.31-36.6398-31.49-36.6398s-32.64 14.03-32.64 36.9298v88.21c0 1.09-.88 1.97-1.97 1.97h-14.38c-1.09 0-1.97-.88-1.97-1.97z" fill="#fff5ed"/>
      <path d="m1451.94 200.04v-27.8c-9.16 19.75-27.2 32.06-50.39 32.06-26.34 0-45.8-16.6-45.8-41.8 0-30.06 22.04-44.66 50.96-44.66h30.63c10.88 0 14.03-6.01 12.88-15.46-1.43-12.3098-10.88-28.6298-35.78-28.6298s-37.55 14.84-39.57 28.8798c-.16 1.11-1.22 1.85-2.31 1.63l-13.75-2.66c-1.06-.21-1.78-1.23-1.57-2.2898 5.6-28.44 30.02-41.59 56.91-41.59s56.11 11.45 56.11 63.2698v79.05c0 1.09-.88 1.97-1.97 1.97h-14.38c-1.09 0-1.97-.88-1.97-1.97zm-44.09-66.74c-24.05 0-33.78 12.6-33.78 27.77 0 14.03 9.16 27.2 27.77 27.2 28.34 0 48.95-20.9 50.1-54.96h-44.09z" fill="#fff5ed"/>
      <path d="m1556.43 75.9502c0 1.21-1.08 2.14-2.27 1.94-25.96-4.41-43.53 15.74-43.53 39.9498v82.19c0 1.09-.88 1.97-1.97 1.97h-14.38c-1.09 0-1.97-.88-1.97-1.97v-138.0498c0-1.09.88-1.97 1.97-1.97h14.38c1.09 0 1.97.88 1.97 1.97v24.94c6.58-18.61 21.76-29.2 40.65-29.2 1.11 0 2.33.12 3.45.28.98.14 1.71.97 1.71 1.95v15.99z" fill="#fff5ed"/>
      <path d="m1687.46 202.01h-18.99c-.61 0-1.18-.28-1.55-.76l-57.24-73.39-18.89 16.89v55.28c0 1.09-.88 1.97-1.97 1.97h-14.38c-1.09 0-1.97-.88-1.97-1.97v-179.2797c0-1.09.88-1.97 1.97-1.97h14.38c1.09 0 1.97.88 1.97 1.97v101.9497l69.87-62.1997c.36-.32.83-.5 1.31-.5h19.81c1.81 0 2.66 2.25 1.3 3.45l-59.94 52.9497 65.86 82.4c1.03 1.29.11 3.2-1.54 3.2z" fill="#fff5ed"/>
      <path d="m1750.53 57.7302c31.49 0 64.41 20.33 64.41 68.4198 0 2.91-.17 5.46-.39 7.67-.1 1.01-.95 1.78-1.96 1.78h-112.45c2.58 31.2 22.62 51.53 51.24 51.53 23.2 0 37.08-13.86 42.91-28.21.36-.9 1.3-1.42 2.25-1.21l13.44 2.91c1.15.25 1.82 1.44 1.45 2.56-6.22 19.03-25.55 41.12-60.05 41.12-44.94 0-69.28-34.07-69.28-73.29 0-43.5098 28.06-73.2898 68.42-73.2898zm46.09 61.8298c-2-29.1998-20.61-45.7998-45.52-45.7998-27.77 0-44.94 15.17-50.38 45.7998z" fill="#fff5ed"/>
      <path d="m1815.8 74.0803v-12.09c0-1.09.88-1.97 1.97-1.97h12.92c7.59 0 13.74-6.15 13.74-13.74v-25.51c0-1.09.88-1.97 1.97-1.97h13.24c1.09 0 1.97.88 1.97 1.97v39.25h30.09c1.09 0 1.97.88 1.97 1.97v12.09c0 1.09-.88 1.97-1.97 1.97h-30.09v83.0197c0 27.92 16.87 29.41 29.6 26.17 1.25-.32 2.47.61 2.47 1.9v12.82c0 .9-.61 1.68-1.48 1.91-3.22.85-7.2 1.28-11.4 1.28-27.2 0-37.5-14.89-37.5-46.09v-81.0197h-25.51c-1.09 0-1.97-.88-1.97-1.97z" fill="#fff5ed"/>
    </svg>
  );
}

function NavItem({ link, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSubOpen(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!link.dropdown) {
    return (
      <a
        href={link.href}
        className="nav-link"
        onClick={(e) => {
          if (link.page && onNavigate) {
            e.preventDefault();
            onNavigate(link.page);
          }
        }}
      >
        {link.label}
      </a>
    );
  }

  return (
    <div
      className="nav-item"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setSubOpen(null);
      }}
    >
      <span className="nav-link">{link.label}</span>

      {open && <div className="nav-dropdown-bridge" />}

      {open && (
        <div className="nav-dropdown">
          {link.dropdown.map((item, i) => (
            <div
              key={i}
              className="nav-dropdown-item"
              onMouseEnter={() => setSubOpen(item.children ? i : null)}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.page && onNavigate) {
                    onNavigate(item.page);
                    setOpen(false);
                    setSubOpen(null);
                  }
                }}
              >
                {item.label}
                {item.children && (
                  <span style={{ fontSize: '10px', marginLeft: 'auto' }}>▶</span>
                )}
              </a>

              {item.children && subOpen === i && (
                <div className="nav-subdropdown">
                  {item.children.map((child, j) => (
                    <div key={j} className="nav-dropdown-item">
                      <a
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (child.page && onNavigate) {
                            onNavigate(child.page);
                            setOpen(false);
                            setSubOpen(null);
                          }
                        }}
                      >
                        {child.label}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className="top-bar-envato-row">
        <a
          href="https://themeforest.net/item/bliize-architecture-construction-next-js-template/57988110"
          target="_blank" rel="noopener noreferrer"
          className="top-bar-envato-link"
          aria-label="View on Envato Market"
        >
          <EnvatoMarketLogo />
        </a>
        <a
          href="https://themeforest.net/item/bliize-architecture-construction-next-js-template/57988110"
          target="_blank" rel="noopener noreferrer"
          className="top-bar-buy"
        >
          Buy now
        </a>
      </div>

      <div className="top-bar-info-row">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <i className="fas fa-phone" /> Call Us: +869 968 236
          </span>
          <span className="top-bar-divider">|</span>
          <span className="top-bar-item">
            <i className="fas fa-envelope" /> Email Us: bliize@gmail.com
          </span>
        </div>
        <div className="top-bar-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-bar-social" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="top-bar-social" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="top-bar-social" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-bar-social" aria-label="Instagram"><i className="fab fa-instagram" /></a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <a
          href="#"
          className="header-logo"
          aria-label="Bliize Home"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
        >
          <Logo />
        </a>
        <nav className="header-nav">
          {NAV_LINKS.map(link => (
            <NavItem key={link.label} link={link} onNavigate={onNavigate} />
          ))}
        </nav>
        <div className="header-right">
          <i className="fas fa-search header-search" />
          <a href="#contact" className="header-contact-btn">Contact Now</a>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`mob-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <div
            key={link.label}
            className="mob-menu-item"
            style={{ transitionDelay: `${0.08 + i * 0.05}s` }}
          >
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                if (link.page && onNavigate) {
                  onNavigate(link.page);
                  setMenuOpen(false);
                }
              }}
            >
              {link.label}
            </a>

            {link.dropdown && link.dropdown.map((item, j) => (
              <div key={j}>
                <a
                  href={item.href}
                  className="mob-sub-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.page && onNavigate) {
                      onNavigate(item.page);
                      setMenuOpen(false);
                    }
                  }}
                >
                  — {item.label}
                </a>

                {item.children && item.children.map((child, k) => (
                  <a
                    key={k}
                    href={child.href}
                    className="mob-subsub-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (child.page && onNavigate) {
                        onNavigate(child.page);
                        setMenuOpen(false);
                      }
                    }}
                  >
                    — {child.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        ))}
        <a
          href="#contact"
          style={{ transitionDelay: '0.33s' }}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>

      <div className={`mob-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)} />
    </>
  );
}