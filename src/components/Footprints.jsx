import { useEffect, useMemo, useRef, useState } from 'react'

const thumbnailModules = {
  italy: import.meta.glob('../photos/travel/thumbs/italy/*.webp', { eager: true, import: 'default' }),
  netherland: import.meta.glob('../photos/travel/thumbs/netherland/*.webp', { eager: true, import: 'default' }),
  warsaw: import.meta.glob('../photos/travel/thumbs/warsaw/*.webp', { eager: true, import: 'default' }),
}
const previewModules = {
  italy: import.meta.glob('../photos/travel/previews/italy/*.webp', { eager: true, import: 'default' }),
  netherland: import.meta.glob('../photos/travel/previews/netherland/*.webp', { eager: true, import: 'default' }),
  warsaw: import.meta.glob('../photos/travel/previews/warsaw/*.webp', { eager: true, import: 'default' }),
}
const textMap = {
  zh: { kicker: 'TRAVEL JOURNAL / ISSUE 04', title: '我的足迹', story: ['走过的地方，', '成为我的一部分。'], intro: '滚动探索旅途中收藏的光线、建筑与日常片段。', italy: '意大利', netherland: '荷兰', warsaw: '华沙' },
  en: { kicker: 'TRAVEL JOURNAL / ISSUE 04', title: 'My Footprints', story: ['Places I have visited,', 'become part of who I am.'], intro: 'Scroll through fragments of light, architecture and everyday life collected along the way.', italy: 'Italy', netherland: 'Netherlands', warsaw: 'Warsaw' },
}
const getPhotos = (country) => {
  const previewsByName = new Map(
    Object.entries(previewModules[country]).map(([path, src]) => [path.split('/').pop(), src]),
  )

  return Object.entries(thumbnailModules[country])
    .sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true }))
    .map(([path, src], i) => ({
      id: `${country}-${path}`,
      src,
      previewSrc: previewsByName.get(path.split('/').pop()) || src,
      alt: `${country} travel photograph ${i + 1}`,
    }))
}

export default function Footprints({ language }) {
  const [country, setCountry] = useState('italy')
  const [selected, setSelected] = useState(null)
  const sceneRef = useRef(null)
  const text = textMap[language]
  const all = useMemo(() => Object.keys(thumbnailModules).flatMap(getPhotos), [])
  const preview = useMemo(() => [0, 8, 15, 23, 31, 39, 4, 12, 20, 28, 36, 44].map((i) => all[i % all.length]), [all])
  const photos = useMemo(() => getPhotos(country), [country])

  useEffect(() => {
    const update = () => {
      const scene = sceneRef.current
      if (!scene) return
      const rect = scene.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight)))
      scene.style.setProperty('--scroll', progress.toFixed(3))
    }
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  return <section className="footprints-page">
    <header className="page-heading footprints-heading"><h1>{text.title}</h1></header>
    <div className="scroll-gallery" ref={sceneRef}><div className="scroll-gallery-sticky">
      <div className="scroll-gallery-copy"><p className="eyebrow">TRAVEL ARCHIVE · 2026</p><h2>{text.story.map((line) => <span key={line}>{line}</span>)}</h2><p>{text.intro}</p></div>
      <div className="motion-grid" aria-hidden="true">{preview.map((photo, index) => <figure key={`${photo.id}-${index}`} style={{ '--dir': index % 2 ? 1 : -1 }}><img src={photo.src} alt="" /></figure>)}</div>
    </div></div>
    <div className="archive"><div className="archive-heading"><div className="country-tabs">{['italy', 'netherland', 'warsaw'].map((item) => <button key={item} className={country === item ? 'active' : ''} onClick={() => setCountry(item)}>{text[item]}</button>)}</div><span>{String(photos.length).padStart(2, '0')} PHOTOGRAPHS</span></div>
      <div className="travel-masonry">{photos.map((photo, i) => <button className="travel-card" key={photo.id} onClick={() => setSelected(i)}><img className="travel-image" src={photo.src} alt={photo.alt} loading="lazy" /><span>{String(i + 1).padStart(2, '0')}</span></button>)}</div>
    </div>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button className="lightbox-close">Close ×</button><button className="lightbox-arrow prev" onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + photos.length) % photos.length) }}>←</button><img src={photos[selected].previewSrc} alt={photos[selected].alt} onClick={(e) => e.stopPropagation()} /><button className="lightbox-arrow next" onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % photos.length) }}>→</button></div>}
  </section>
}
