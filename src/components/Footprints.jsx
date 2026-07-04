import { NavLink, Outlet } from 'react-router-dom'

const footprintsText = {
  zh: {
    title: '我的足迹',
    subtitle: '选择一个国家标签，查看对应的旅行照片。',
    italy: '意大利',
    netherland: '荷兰',
  },
  en: {
    title: 'My Footprints',
    subtitle: 'Choose a country tab to browse the matching travel photos.',
    italy: 'Italy',
    netherland: 'Netherlands',
  },
}

export default function Footprints({ language }) {
  const text = footprintsText[language] || footprintsText.zh

  return (
    <section className="footprints-page" id="footprints">
      <div className="footprints-shell">
        <div className="section-header footprints-header">
          <p className="footprints-kicker">Travel</p>
          <h1 className="section-title footprints-title">
            <span className="title-icon">🌍</span>
            {text.title}
            <span className="title-icon">🌍</span>
          </h1>
          <p className="section-subtitle footprints-subtitle">{text.subtitle}</p>
        </div>

        <div className="footprints-tabs" role="tablist" aria-label={text.title}>
          <NavLink
            to="italy"
            className={({ isActive }) => `footprints-tab ${isActive ? 'active' : ''}`}
          >
            🇮🇹 {text.italy}
          </NavLink>
          <NavLink
            to="netherland"
            className={({ isActive }) => `footprints-tab ${isActive ? 'active' : ''}`}
          >
            🇳🇱 {text.netherland}
          </NavLink>
        </div>

        <Outlet />
      </div>
    </section>
  )
}