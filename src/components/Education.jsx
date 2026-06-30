import React, { useState } from 'react';
import '../styles/Education.css';

const educationText = {
  zh: {
    title: '教育经历',
    items: [
      {
        id: 1,
        school: '香港中文大学（深圳）',
        schoolUrl: 'https://www.cuhk.edu.cn/',
        degree: '计算机科学与技术',
        period: '2023年9月 - 2027年5月',
        description: '数据科学学院计算机科学与技术专业在读生，专注于软件开发、机器学习和算法设计',
        highlights: ['数据科学', '软件开发', '机器学习'],
        location: '📍 中国 · 广东 · 深圳',
      },
      {
        id: 2,
        school: '阿尔托大学 (Aalto University)',
        schoolUrl: 'https://www.aalto.fi/en',
        degree: '计算机科学与技术',
        period: '2026年1月 - 2026年6月',
        description: '交换项目',
        highlights: ['国际交流', '跨文化学习', '计算机科学'],
        location: '📍 芬兰 · 埃斯波',
      },
    ],
  },
  en: {
    title: 'Education',
    items: [
      {
        id: 1,
        school: 'The Chinese University of Hong Kong, Shenzhen',
        schoolUrl: 'https://www.cuhk.edu.cn/',
        degree: 'Computer Science and Technology',
        period: 'Sep 2023 - May 2027',
        description: 'An undergraduate student in the School of Data Science, focusing on software development, machine learning, and algorithm design.',
        highlights: ['Data Science', 'Software Development', 'Machine Learning'],
        location: '📍 China · Guangdong · Shenzhen',
      },
      {
        id: 2,
        school: 'Aalto University',
        schoolUrl: 'https://www.aalto.fi/en',
        degree: 'Computer Science and Technology',
        period: 'Jan 2026 - Jun 2026',
        description: 'Exchange program.',
        highlights: ['International Exchange', 'Cross-cultural Learning', 'Computer Science'],
        location: '📍 Espoo, Finland',
      },
    ],
  },
};

export default function Education({ language }) {
  const [activeId, setActiveId] = useState(1);
  const text = educationText[language] || educationText.zh;

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🎓</span>
            {text.title}
            <span className="title-icon">🎓</span>
          </h2>
          {/* <div className="title-underline" /> */}
        </div>

        <div className="timeline">
          {text.items.map((edu, index) => (
            <div
              key={edu.id}
              className={`timeline-item ${activeId === edu.id ? 'active' : ''}`}
              onClick={() => setActiveId(edu.id)}
            >
              <div className="timeline-marker">
                <div className="marker-circle" />
                {index < text.items.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-content">
                <div className="card-header" onClick={() => setActiveId(edu.id)}>
                  <div className="school-header">
                    <a 
                      href={edu.schoolUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="school-name"
                    >
                      {edu.school}
                    </a>
                  </div>
                  <span className="period">{edu.period}</span>
                </div>

                {activeId === edu.id && (
                  <div className="card-expanded">
                    <p className="degree">{edu.degree}</p>
                    <p className="description">{edu.description}</p>
                    {edu.location && <p style={{ fontSize: '0.9rem', color: '#b0b0c0', marginTop: '0.5rem', marginBottom: '0.8rem' }}>{edu.location}</p>}
                    <div className="highlights">
                      {edu.highlights.map((highlight, i) => (
                        <span key={i} className="highlight-badge">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
