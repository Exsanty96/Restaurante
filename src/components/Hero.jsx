function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-subtitle">
          COCINA ARTESANAL · QUITO
        </span>

        <h1>
          Sabores que
          <span> cuentan historias.</span>
        </h1>

        <p>
          Una experiencia gastronómica creada para disfrutar,
          compartir y crear momentos inolvidables.
        </p>

        <div className="hero-buttons">

          <a href="#menu" className="btn btn-primary">
            Ver menú
          </a>

          <a href="#reservar" className="btn btn-secondary">
            Reservar mesa
          </a>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>Descubre</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;