import './School.css';


const School = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1};
  return (
    
    <div id="School" class="School box">
    <div className="School-card">
      <div className="card-front Sucursal1">
        <h1>Valle de señora</h1>
      </div>
      <div className="card-back Ubicacion">
      <h1>Ubicación</h1>
      <h2>Fosforo 617, Valle de Señora, 37205 León, Gto.</h2>

      </div>
    </div>
    <div className="School-card ">
      <div className="card-front Sucursal2">
        <h1>Mariano Escobedo</h1>
      </div>
      <div className="card-back Ubicacion">
        <h1>Ubicación</h1>
      </div>
    </div>
  </div>
  )
}

export default School