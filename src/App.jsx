import { useRef, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Footprints from './components/Footprints'
import bgmFile from './01 Stardew Valley Overture.mp3'
import './styles/globals.css'
import './styles/Navigation.css'
import './styles/About.css'
import './styles/Education.css'
import './styles/Experience.css'
import './styles/Footprints.css'
import './styles/Italy.css'

export default function App() {
  const [language, setLanguage] = useState('zh')
  const [musicStatus, setMusicStatus] = useState('stopped')
  const audioRef = useRef(null)
  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused) { audio.pause(); setMusicStatus('stopped'); return }
    audio.loop = true
    try { await audio.play(); setMusicStatus('playing') } catch { setMusicStatus('stopped') }
  }
  return (
    <BrowserRouter basename="/personal-web">
      <audio ref={audioRef} src={bgmFile} preload="metadata" />
      <Navigation language={language} onToggleLanguage={() => setLanguage((v) => v === 'zh' ? 'en' : 'zh')} musicStatus={musicStatus} onToggleMusic={toggleMusic} />
      <main><Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/education" element={<Education language={language} />} />
        <Route path="/experience" element={<Experience language={language} />} />
        <Route path="/footprints" element={<Footprints language={language} />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes></main>
    </BrowserRouter>
  )
}
