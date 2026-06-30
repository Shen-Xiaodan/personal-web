import React, { useState } from 'react';
import '../styles/Experience.css';

const experienceText = {
  zh: {
    title: '工作经历',
    achievementsTitle: '主要工作',
    items: [
      {
        id: 1,
        company: '中国电信',
        position: '研发工程师（实习）',
        period: '2025年7月 - 2025年8月',
        description: '参与AI工作流程的开发和实现，负责前端和后端编程工作',
        achievements: [
          '设计AI 工作流完成不同的任务',
          '进行前端和后端编程，优化系统性能',
        ],
        location: '📍 中国 · 广东 · 惠州',
      },
    ],
  },
  en: {
    title: 'Experience',
    achievementsTitle: 'Key Work',
    items: [
      {
        id: 1,
        company: 'China Telecom',
        position: 'R&D Engineer (Intern)',
        period: 'Jul 2025 - Aug 2025',
        description: 'Participated in the development and implementation of AI workflows, responsible for frontend and backend programming.',
        achievements: [
          'Designed AI workflows to complete different tasks',
          'Handled frontend and backend programming to optimize system performance',
        ],
        location: '📍 China · Guangdong · Huizhou',
      },
    ],
  },
};

export default function Experience({ language }) {
  const [expandedId, setExpandedId] = useState(null);
  const text = experienceText[language] || experienceText.zh;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">💼</span>
            {text.title}
            <span className="title-icon">💼</span>
          </h2>
          {/* <div className="title-underline" /> */}
        </div>

        <div className="experience-grid">
          {text.items.map((exp) => (
            <div
              key={exp.id}
              className={`experience-card ${expandedId === exp.id ? 'expanded' : ''}`}
              onClick={() => toggleExpand(exp.id)}
            >
              <div className="card-top">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="position">{exp.position}</p>
                  <span className="period">{exp.period}</span>
                </div>
                <div className="expand-icon">
                  <span>{expandedId === exp.id ? '△' : '▽'}</span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              {exp.location && <p style={{ fontSize: '0.9rem', color: '#b0b0c0', marginBottom: '1rem' }}>{exp.location}</p>}

              {expandedId === exp.id && (
                <div className="achievements">
                  <h4>{text.achievementsTitle}</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <span className="bullet">◆</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
