const dishes = [
  {
    name: "Lomo a la parrilla",
    description: "Corte premium acompañado de vegetales asados.",
    price: "$18.50",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pasta artesanal",
    description: "Pasta fresca con salsa cremosa de la casa.",
    price: "$14.90",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Salmón grillado",
    description: "Salmón fresco con vegetales y salsa cítrica.",
    price: "$19.90",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
  },
];

function FeaturedDishes() {
  return (
    <section className="dishes section" id="menu">

      <div className="section-header">

        <span className="section-label">
          NUESTRO MENÚ
        </span>

        <h2>
          Favoritos de
          <span> la casa.</span>
        </h2>

        <p>
          Algunos de los platos que nuestros clientes
          disfrutan una y otra vez.
        </p>

      </div>

      <div className="dishes-grid">

        {dishes.map((dish) => (
          <article className="dish-card" key={dish.name}>

            <div className="dish-image">
              <img src={dish.image} alt={dish.name} />
            </div>

            <div className="dish-content">

              <div className="dish-title">
                <h3>{dish.name}</h3>
                <strong>{dish.price}</strong>
              </div>

              <p>{dish.description}</p>

              <button>
                Ver detalles →
              </button>

            </div>

          </article>
        ))}

      </div>

      <div className="menu-button-container">
        <a href="#menu" className="btn btn-dark">
          Ver menú completo
        </a>
      </div>

    </section>
  );
}

export default FeaturedDishes;