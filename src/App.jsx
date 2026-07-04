import Navigation from './components/Navigation'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Footprints from './components/Footprints'
import Italy from './components/Italy'
import Netherlands from './components/Netherlands'
import { useEffect, useRef, useState } from 'react'
import bgmFile from './01 Stardew Valley Overture.mp3'
import './styles/globals.css'
import './styles/Navigation.css'
import './styles/About.css'
import './styles/Education.css'
import './styles/Experience.css'
import './styles/Footprints.css'
import './styles/Italy.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

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
    } catch {
      audio.pause()
    }
  }

  const stopMusic = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.pause()
    audio.currentTime = 0
  }

  const toggleMusic = () => {
    if (musicStatus === 'playing') {
      stopMusic()
      return
    }

    playMusic()
  }

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return undefined
    }

    const handlePlay = () => {
      setMusicStatus('playing')
    }

    const handlePause = () => {
      setMusicStatus('stopped')
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    playMusic()

    const startOnFirstInteraction = () => {
      playMusic()
    }

    document.addEventListener('pointerdown', startOnFirstInteraction, { once: true })
    document.addEventListener('keydown', startOnFirstInteraction, { once: true })

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
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
          <Route path="/footprints" element={<Footprints language={language} />}>
            <Route index element={<Navigate to="italy" replace />} />
            <Route path="italy" element={<Italy language={language} />} />
            <Route path="netherland" element={<Netherlands language={language} />} />
          </Route>
          <Route path="/italy" element={<Navigate to="/footprints/italy" replace />} />
          <Route path="/netherland" element={<Navigate to="/footprints/netherland" replace />} />
          <Route path="/gallery" element={<Navigate to="/footprints" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
