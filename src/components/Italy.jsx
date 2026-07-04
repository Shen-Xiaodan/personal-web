import CountryGallery from './CountryGallery'

import '../styles/Italy.css'

const italyImages = Object.entries(
  import.meta.glob('../../italy/*.[Jj][Pp][Gg]', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath, 'en', { numeric: true }))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() || `photo-${index + 1}`

    return {
      id: `${fileName}-${index}`,
      src,
      alt: `Italy travel photo ${index + 1}`,
    }
  })

export default function Italy({ language }) {
  void language

  return <CountryGallery photos={italyImages} countryName="Italy" />
}