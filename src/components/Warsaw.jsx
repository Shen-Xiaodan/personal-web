import CountryGallery from './CountryGallery'

const warsawImages = Object.entries(
  import.meta.glob('../../warsaw/*.[Jj][Pp][Gg]', {
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
      alt: `Warsaw travel photo ${index + 1}`,
    }
  })

export default function Warsaw() {
  return <CountryGallery photos={warsawImages} countryName="Warsaw" />
}