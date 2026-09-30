const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
];

function Gallery() {
  return (
    <section className="gallery section" id="galeria">

      <div className="section-header">

        <span className="section-label">
          NUESTRO ESPACIO
        </span>

        <h2>
          Momentos para
          <span> recordar.</span>
        </h2>

      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Galería ${index + 1}`} />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;