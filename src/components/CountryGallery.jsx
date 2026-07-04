export default function CountryGallery({ photos, countryName }) {
  return (
    <div className="travel-masonry" aria-label={countryName}>
      {photos.map((photo, index) => (
        <figure
          key={photo.id}
          className="travel-card"
          style={{ animationDelay: `${index * 0.06}s` }}
        >
          <img className="travel-image" src={photo.src} alt={photo.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}