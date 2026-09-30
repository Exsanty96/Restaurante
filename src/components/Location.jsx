function Location() {
  return (
    <section className="location section" id="ubicacion">

      <div className="location-container">

        <div className="location-info">

          <span className="section-label">
            VISÍTANOS
          </span>

          <h2>
            Te esperamos
            <span> en nuestra mesa.</span>
          </h2>

          <div className="info-item">
            <strong>📍 Dirección</strong>
            <p>
              Av. República y Naciones Unidas<br />
              Quito, Ecuador
            </p>
          </div>

          <div className="info-item">
            <strong>🕐 Horarios</strong>

            <p>
              Lunes — Viernes: 12:00 — 22:00<br />
              Sábado: 12:00 — 23:00<br />
              Domingo: 12:00 — 20:00
            </p>
          </div>

          <div className="info-item">
            <strong>📞 Reservas</strong>

            <p>
              +593 99 999 9999
            </p>
          </div>

          <a
            href="https://wa.me/593999999999"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            WhatsApp
          </a>

        </div>

        <div className="map-container">

          <iframe
            title="Ubicación del restaurante"
            src="https://www.google.com/maps?q=Quito,Ecuador&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Location;