import galleryImages from '../data/galleryData.js'
import IllustratedBackdrop from './IllustratedBackdrop.jsx'

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <IllustratedBackdrop variant="gallery" asset="thali" />
      <div className="container">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow gallery-eyebrow"><span /> आमच्या ताटातून</p>
            <h2>डोळ्यांनीही <em>चाखा.</em></h2>
          </div>
          <div className="gallery-controls" aria-hidden="true"><span>←</span><span>→</span></div>
        </div>
      </div>
      <div className="gallery-track" aria-label="Food gallery">
        {galleryImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
      </div>
    </section>
  )
}

export default Gallery
