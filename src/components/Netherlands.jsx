import CountryGallery from './CountryGallery'

const netherlandsImages = Object.entries(
  import.meta.glob('../../netherland/*.[Jj][Pp][Gg]', {
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
      alt: `Netherlands travel photo ${index + 1}`,
    }
  })

export default function Netherlands() {
  return <CountryGallery photos={netherlandsImages} countryName="Netherlands" />
}