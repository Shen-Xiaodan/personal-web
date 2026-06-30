import React, { useState } from 'react';
import '../styles/Gallery.css';

const galleryText = {
  zh: {
    title: '我的足迹',
    subtitle: '在世界各地旅行时捕捉的美妙时刻',
    photos: [
      {
        id: 1,
        title: '日本京都',
        location: '京都',
        emoji: '🏯',
        description: '古色古香的寺庙',
      },
      {
        id: 2,
        title: '瑞士阿尔卑斯',
        location: '瑞士',
        emoji: '🏔️',
        description: '壮观的山峰',
      },
      {
        id: 3,
        title: '意大利威尼斯',
        location: '威尼斯',
        emoji: '🚤',
        description: '浪漫的水都',
      },
      {
        id: 4,
        title: '新西兰皮克顿',
        location: '新西兰',
        emoji: '🌿',
        description: '原始森林',
      },
      {
        id: 5,
        title: '冰岛黄金圈',
        location: '冰岛',
        emoji: '🌊',
        description: '神奇的瀑布',
      },
      {
        id: 6,
        title: '泰国曼谷',
        location: '泰国',
        emoji: '🏯',
        description: '夜市美食',
      },
    ],
  },
  en: {
    title: 'My Travels',
    subtitle: 'Wonderful moments captured while traveling around the world',
    photos: [
      {
        id: 1,
        title: 'Kyoto, Japan',
        location: 'Kyoto',
        emoji: '🏯',
        description: 'Ancient temples with timeless charm',
      },
      {
        id: 2,
        title: 'Swiss Alps',
        location: 'Switzerland',
        emoji: '🏔️',
        description: 'Spectacular mountain peaks',
      },
      {
        id: 3,
        title: 'Venice, Italy',
        location: 'Venice',
        emoji: '🚤',
        description: 'A romantic city of canals',
      },
      {
        id: 4,
        title: 'Picton, New Zealand',
        location: 'New Zealand',
        emoji: '🌿',
        description: 'Pristine forests',
      },
      {
        id: 5,
        title: 'Golden Circle, Iceland',
        location: 'Iceland',
        emoji: '🌊',
        description: 'Magical waterfalls',
      },
      {
        id: 6,
        title: 'Bangkok, Thailand',
        location: 'Thailand',
        emoji: '🏯',
        description: 'Night market food',
      },
    ],
  },
};

export default function Gallery({ language }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const text = galleryText[language] || galleryText.zh;

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🌍</span>
            {text.title}
            <span className="title-icon">🌍</span>
          </h2>
          <p className="section-subtitle">
            {text.subtitle}
          </p>
          {/* <div className="title-underline" /> */}
        </div>

        <div className="gallery-grid">
          {text.photos.map((photo) => (
            <div
              key={photo.id}
              className={`photo-card ${selectedId === photo.id ? 'selected' : ''}`}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(selectedId === photo.id ? null : photo.id)}
            >
              <div className="photo-placeholder">
                <div className="emoji-large">{photo.emoji}</div>
              </div>

              <div className="photo-overlay">
                <h3 className="photo-title">{photo.title}</h3>
                <p className="photo-location">📍 {photo.location}</p>
                <p className="photo-description">{photo.description}</p>
              </div>

              <div
                className="photo-glow"
                style={{
                  opacity: hoveredId === photo.id ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
