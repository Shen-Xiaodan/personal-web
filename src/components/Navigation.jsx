import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import clickEffect from '../click-effect.mp3';
import '../styles/Navigation.css';

const navigationText = {
  zh: {
    about: '关于我',
    education: '教育',
    experience: '工作',
    gallery: '足迹',
    language: 'English',
    languageLabel: '切换到英文',
    musicOn: '播放中',
    musicOff: '已停止',
    musicActionPlaying: '静音',
    musicActionStopped: '播放',
  },
  en: {
    about: 'About',
    education: 'Education',
    experience: 'Experience',
    gallery: 'Gallery',
    language: '中文',
    languageLabel: 'Switch to Chinese',
    musicOn: 'Playing',
    musicOff: 'Stopped',
    musicActionPlaying: 'Mute',
    musicActionStopped: 'Play',
  },
};

export default function Navigation({ language, onToggleLanguage, musicStatus, onToggleMusic }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickAudioRef = useRef(null);
  const text = navigationText[language] || navigationText.zh;

  const playClickEffect = () => {
    const audio = clickAudioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const handleNavAction = (action) => {
    playClickEffect();
    action();
  };

  return (
    <nav className={`navbar`}>
      <audio ref={clickAudioRef} src={clickEffect} preload="auto" />
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-emoji">🐙</span>
          <span className="logo-text">沈小丹</span>
        </div>

        <button
          type="button"
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => handleNavAction(() => setIsMobileMenuOpen(false))}
            >
              {text.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className="nav-link"
              onClick={() => handleNavAction(() => setIsMobileMenuOpen(false))}
            >
              {text.education}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className="nav-link"
              onClick={() => handleNavAction(() => setIsMobileMenuOpen(false))}
            >
              {text.experience}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className="nav-link"
              onClick={() => handleNavAction(() => setIsMobileMenuOpen(false))}
            >
              {text.gallery}
            </Link>
          </li>
          <li className="nav-item nav-item-language">
            <button
              type="button"
              className="nav-link language-link"
              onClick={() => handleNavAction(onToggleLanguage)}
              aria-label={text.languageLabel}
            >
              {text.language}
            </button>
          </li>
          <li className="nav-item nav-item-music">
            <button
              type="button"
              className="nav-link music-link"
              onClick={() => handleNavAction(onToggleMusic)}
              aria-label={musicStatus === 'playing' ? text.musicActionPlaying : text.musicActionStopped}
              aria-pressed={musicStatus === 'playing'}
            >
              <span className="music-action">
                {musicStatus === 'playing' ? text.musicActionPlaying : text.musicActionStopped}
              </span>
              <span className={`music-status ${musicStatus}`}>
                {musicStatus === 'playing' ? text.musicOn : text.musicOff}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
