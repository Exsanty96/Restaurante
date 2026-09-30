function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#inicio" className="logo">
          SABORÉ
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#menu">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>

        <a href="#reservar" className="nav-button">
          Reservar mesa
        </a>

      </div>
    </header>
  );
}

export default Navbar;