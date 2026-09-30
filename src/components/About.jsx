function About() {
  return (
    <section className="about section" id="nosotros">

      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
            alt="Interior del restaurante"
          />
        </div>

        <div className="about-content">

          <span className="section-label">
            NUESTRA HISTORIA
          </span>

          <h2>
            Una mesa siempre
            <span> tiene una historia.</span>
          </h2>

          <p>
            En Saboré creemos que la comida es mucho más que
            alimentarse. Es reunirse, conversar, celebrar y
            compartir momentos.
          </p>

          <p>
            Nuestro restaurante combina ingredientes frescos,
            técnicas tradicionales y una propuesta contemporánea
            para crear una experiencia única.
          </p>

          <div className="about-info">

            <div>
              <strong>12+</strong>
              <span>Años de experiencia</span>
            </div>

            <div>
              <strong>40+</strong>
              <span>Platos disponibles</span>
            </div>

            <div>
              <strong>4.9</strong>
              <span>Valoración</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;