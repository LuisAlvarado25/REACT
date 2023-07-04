import './School.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faTimes } from "@fortawesome/free-solid-svg-icons";

const School = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1};
  return (
    
    <div id="School" className="School box">
    <div className="School-card">
      <div className="card-front Sucursal1">
        <h1>Valle de señora</h1>
      </div>
      <div className="card-back Ubicacion">
      <h1>Ubicación</h1>
      <h2>Fosforo 617, Valle de Señora, 37205 León, Gto.</h2>
      <div className='Maps'>
        <a href="https://www.facebook.com/Mambohouse77/?mibextid=ZbWKwL" className="btn" style={{color: '#ff0000'}}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="5x"/>  
         </a>
         <h3>CLICK</h3>
        </div>
     </div>
    </div>
    <div className="School-card ">
      <div className="card-front Sucursal2">
        <h1>Mariano Escobedo</h1>
        </div>
      <div className="card-back Ubicacion">
        <h1>Ubicación</h1>
        <h2>Blvr. Mariano Escobedo Pte. 4502 León, Gto.</h2>
        <div className='Maps'>
        <a href="https://www.facebook.com/Mambohouse77/?mibextid=ZbWKwL" className="btn" style={{color: '#ff0000'}}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="5x"/>  
         </a>
         <h3>CLICK</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default School