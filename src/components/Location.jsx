function Location() {
  return (
    <section className="location" id="location">
      <div className="container location-grid">
        <div className="location-copy">
          <p className="eyebrow section-eyebrow"><span /> भेट द्या</p>
          <h2>आपली वाट<br /><em>पाहतोय.</em></h2>
          <div className="location-details">
            <div><span className="detail-icon" aria-hidden="true">⌖</span><p><strong>Find us here</strong>Lane 4, Shantiniketan,<br />Pune, Maharashtra 411038</p></div>
            <div><span className="detail-icon" aria-hidden="true">◷</span><p><strong>Opening hours</strong>Mon – Sun · 11:30 am – 11:00 pm</p></div>
          </div>
          <a className="button button-primary" href="https://maps.google.com/?q=Pune,Maharashtra" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </div>
        <div className="map-card" aria-label="Map showing the restaurant location">
          <div className="map-grid" aria-hidden="true" />
          <span className="map-road road-one" aria-hidden="true" /><span className="map-road road-two" aria-hidden="true" />
          <span className="map-pin" aria-hidden="true">⌖</span>
          <div className="map-label"><strong>आपलं स्वाद</strong><small>Shantiniketan, Pune</small></div>
        </div>
      </div>
    </section>
  )
}

export default Location
