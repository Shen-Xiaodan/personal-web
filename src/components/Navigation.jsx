import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import clickEffect from '../click-effect.mp3';
import '../styles/Navigation.css';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.16-3.37-1.16-.45-1.13-1.1-1.43-1.1-1.43-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.88 1.52 2.3 1.08 2.86.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.32.1-2.76 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.44.2 2.5.1 2.76.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.93.68 1.88v2.79c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm16 3.2-7.2 4.8a1.5 1.5 0 0 1-1.6 0L4 8.2V17h16V8.2ZM5 7l7 4.67L19 7H5Z" />
    </svg>
  );
}

const navigationText = {
  zh: {
    about: '关于我',
    education: '教育',
    experience: '工作',
    footprints: '足迹',
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
    footprints: 'Footprints',
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
          <span className="logo-text">沈小丹 (Shen Xiaodan)</span>
          <div className="nav-social-links" aria-label="Social links">
            <a
              className="nav-social-link"
              href="https://github.com/Shen-Xiaodan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              className="nav-social-link"
              href="mailto:0127alisa@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <MailIcon />
            </a>
          </div>
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
              to="/footprints"
              className="nav-link"
              onClick={() => handleNavAction(() => setIsMobileMenuOpen(false))}
            >
              {text.footprints}
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
