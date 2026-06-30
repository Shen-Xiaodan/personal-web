import React from 'react';
import profilePhoto from '../photos/profile/profile.jpg';
import englishResume from '../Shen_Xiaodan-CV.pdf';
import chineseResume from '../沈小丹——简历.pdf';
import '../styles/About.css';

const aboutText = {
  zh: {
    title: '关于我',
    intro: '你好！我是香港中文大学（深圳）计算机科学与技术专业大四本科生。',
    description: '我对软件开发、机器学习和算法设计充满热情。',
    skills: '主要技能',
    interestTitle: '我的兴趣',
    interests: [
      '软件开发 - 创造有意思的软件和网站',
      '机器学习 - 将基于学习的方法应用于实际问题',
      '算法设计 - 开发高效的计算问题解决方案',
    ],
    currentTitle: '目前在做什么',
    current: ['持续学习', '探索研究和行业机会'],
    resumeTitle: '我的简历',
    resumeEnglish: 'CV in English',
    resumeChinese: '简历（中文版）',
    skillTags: ['Java', 'Python', '机器学习', 'JavaScript/React'],
  },
  en: {
    title: 'About Me',
    intro: 'Hello! I am a senior undergraduate student majoring in Computer Science and Technology at The Chinese University of Hong Kong, Shenzhen.',
    description: 'I am passionate about software development, machine learning, and algorithm design.',
    skills: 'Key Skills',
    interestTitle: 'My Interests',
    interests: [
      'Software Development - Building interesting software and websites',
      'Machine Learning - Applying learning-based methods to real-world problems',
      'Algorithm Design - Developing efficient solutions to computational problems',
    ],
    currentTitle: 'What I Am Doing Now',
    current: ['Continuing to learn', 'Exploring research and industry opportunities'],
    resumeTitle: 'My Resume',
    resumeEnglish: 'English CV',
    resumeChinese: 'Chinese Resume',
    skillTags: ['Java', 'Python', 'Machine Learning', 'JavaScript/React'],
  },
};

export default function About({ language }) {
  const text = aboutText[language] || aboutText.zh;

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">
            <span className="title-icon">✨</span>
            {text.title}
            <span className="title-icon">✨</span>
          </h2>
          {/* <div className="title-underline" /> */}
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img className="profile-photo" src={profilePhoto} alt="Profile" />
            </div>
          </div>

          <div className="about-text">
            <p className="intro-text">
              {text.intro}
            </p>

            <p className="description">
              {text.description}
            </p>

            <div className="skills">
              <h3>{text.skills}</h3>
              <div className="skill-tags">
                {text.skillTags.map((tag) => (
                  <label key={tag} className="tag">{tag}</label>
                ))}
              </div>
            </div>

            <div className="expanded-content">
              <h4>{text.interestTitle}</h4>
              <ul>
                {text.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4>{text.currentTitle}</h4>
              <ul>
                {text.current.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="resume-links">
                <p>{text.resumeTitle}</p>
                <a href={englishResume} target="_blank" rel="noopener noreferrer">
                  {text.resumeEnglish}
                </a>
                <a href={chineseResume} target="_blank" rel="noopener noreferrer">
                  {text.resumeChinese}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
