import profilePhoto from '../photos/profile/profile.jpg'
import englishResume from '../Shen_Xiaodan-CV.pdf'
import chineseResume from '../沈小丹——简历.pdf'

const copy = {
  zh: { issue: 'PROFILE / ISSUE 01', title: '关于我', intro: '一个喜欢旅行和摄影的计算机学生', description: '平时喜欢写代码，也喜欢带着相机到处走走。目前主要使用 Java、Python 和 JavaScript，学习方向集中在软件开发、机器学习与 AI 应用。', skills: '主要技能', interestsTitle: '我的兴趣', interests: ['软件开发 — 喜欢把想法做成真正可以使用的软件和网站', 'AI Agent — 正在学习与实践，也在尝试把它应用到实际项目中'], currentTitle: '最近在做什么', current: ['继续学习计算机科学，也不断尝试新的技术', '旅行、拍照，并记录途中遇到的有趣瞬间'], resume: '我的简历', en: 'CV in English', zh: '简历（中文版）' },
  en: { issue: 'PROFILE / ISSUE 01', title: 'About Me', intro: 'I am a computer science student who loves travelling and photography.', description: 'I enjoy writing code, but I also like heading out with a camera. I mainly work with Java, Python and JavaScript, and I am currently exploring software development, machine learning and practical AI applications.', skills: 'Key Skills', interestsTitle: 'My Interests', interests: ['Software Development — Turning ideas into software and websites people can actually use', 'AI Agents — Learning by building and exploring how they can work in real projects'], currentTitle: 'What I Am Doing Lately', current: ['Learning more about computer science and experimenting with new technology', 'Travelling, taking photographs and collecting interesting moments along the way'], resume: 'My Résumé', en: 'English CV', zh: 'Chinese Résumé' },
}
export default function About({ language }) {
  const text = copy[language]
  return <section className="about"><div className="about-container">
    <header className="page-heading"><h1>{text.title}</h1></header>
    <div className="about-content"><div className="about-image"><div className="image-frame"><img className="profile-photo" src={profilePhoto} alt="Shen Xiaodan" /><span>PORTRAIT / 01</span></div></div>
      <article className="about-text"><p className="intro-text">{text.intro}</p><p className="description">{text.description}</p>
        <div className="skills"><h3>{text.skills}</h3><div className="skill-tags">{['JAVA', 'PYTHON', 'MACHINE LEARNING', 'JAVASCRIPT / REACT'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
        <div className="expanded-content"><h4>{text.interestsTitle}</h4><ul>{text.interests.map((item) => <li key={item}>{item}</li>)}</ul><h4>{text.currentTitle}</h4><ul>{text.current.map((item) => <li key={item}>{item}</li>)}</ul><div className="resume-links"><p>{text.resume}</p><a href={englishResume} target="_blank" rel="noreferrer">{text.en} ↗</a><a href={chineseResume} target="_blank" rel="noreferrer">{text.zh} ↗</a></div></div>
      </article></div>
  </div></section>
}
