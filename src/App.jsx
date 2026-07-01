import Navigation from './components/Navigation'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import { useEffect, useRef, useState } from 'react'
import bgmFile from './01 Stardew Valley Overture.mp3'
import './styles/globals.css'
import './styles/Navigation.css'
import './styles/About.css'
import './styles/Education.css'
import './styles/Experience.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [language, setLanguage] = useState('zh')
  const [musicStatus, setMusicStatus] = useState('stopped')
  const audioRef = useRef(null)

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'zh' ? 'en' : 'zh'))
  }

  const playMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    try {
      audio.loop = true
      await audio.play()
      setMusicStatus('playing')
    } catch {
      setMusicStatus('stopped')
    }
  }

  const stopMusic = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.pause()
    audio.currentTime = 0
    setMusicStatus('stopped')
  }

  const toggleMusic = () => {
    if (musicStatus === 'playing') {
      stopMusic()
      return
    }

    playMusic()
  }

  useEffect(() => {
    playMusic()

    const startOnFirstInteraction = () => {
      playMusic()
    }

    document.addEventListener('pointerdown', startOnFirstInteraction, { once: true })
    document.addEventListener('keydown', startOnFirstInteraction, { once: true })

    return () => {
      document.removeEventListener('pointerdown', startOnFirstInteraction)
      document.removeEventListener('keydown', startOnFirstInteraction)
    }
  }, [])

  return (
    <BrowserRouter basename="/personal-web">
      <audio ref={audioRef} src={bgmFile} preload="auto" />
      <Navigation
        language={language}
        onToggleLanguage={toggleLanguage}
        musicStatus={musicStatus}
        onToggleMusic={toggleMusic}
      />
      <main>
        <Routes>
          <Route path="/" element={<About language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/education" element={<Education language={language} />} />
          <Route path="/experience" element={<Experience language={language} />} />
          <Route path="/gallery" element={<Gallery language={language} />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
