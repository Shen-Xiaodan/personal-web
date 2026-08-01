import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const copy = { zh: { about: '关于', education: '教育', experience: '经历', footprints: '足迹', menu: '菜单' }, en: { about: 'About', education: 'Education', experience: 'Experience', footprints: 'Footprints', menu: 'Menu' } }
const GitHubIcon = () => <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.16-3.37-1.16-.45-1.13-1.1-1.43-1.1-1.43-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.88 1.52 2.3 1.08 2.86.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.32.1-2.76 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.44.2 2.5.1 2.76.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.93.68 1.88v2.79c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" /></svg>
const MailIcon = () => <svg viewBox="0 0 24 24"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm16 3.2-7.2 4.8a1.5 1.5 0 0 1-1.6 0L4 8.2V17h16V8.2ZM5 7l7 4.67L19 7H5Z" /></svg>

export default function Navigation({ language, onToggleLanguage, musicStatus, onToggleMusic }) {
  const [open, setOpen] = useState(false)
  const text = copy[language]
  const items = [['about', text.about], ['education', text.education], ['experience', text.experience], ['footprints', text.footprints]]
  return <header className="navbar">
    <div className="nav-identity">
      <NavLink className="octopus-avatar" to="/about" aria-label="Home">🐙</NavLink>
      <span className="nav-name">沈小丹 <i>/ Shen Xiaodan</i></span>
      <a className="social-link" href="https://github.com/Shen-Xiaodan" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
      <a className="social-link" href="mailto:0127alisa@gmail.com" aria-label="Email"><MailIcon /></a>
    </div>
    <div className={`nav-right ${open ? 'open' : ''}`}>
      <nav className="nav-menu">{items.map(([path, label], i) => <NavLink key={path} to={`/${path}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</NavLink>)}</nav>
      <div className="nav-actions"><button className={`sound-button ${musicStatus}`} onClick={onToggleMusic} aria-label="Toggle music"><i /><i /><i /></button><button className="language-button" onClick={onToggleLanguage}>{language === 'zh' ? 'EN' : '中'}</button></div>
    </div>
    <button className="menu-button" onClick={() => setOpen(!open)}>{text.menu}</button>
  </header>
}
