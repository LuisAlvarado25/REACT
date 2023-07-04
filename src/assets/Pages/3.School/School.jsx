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
        <a href="https://www.google.com/maps/dir//the+mambo+house/@21.1590521,-101.6551392,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x842bbf61b078ac5d:0x4a989a4aea2f711a!2m2!1d-101.6525259!2d21.1590365?entry=ttu" className="btn" style={{color: '#ff0000'}}>
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
        <h2>Blvr. Mariano Escobedo. 4502 León, Gto.</h2>
        <div className='Maps'>
        <a href="https://www.google.com/maps/dir//Centro+de+Negocios+Plaza+K2,+Blvr.+Mariano+Escobedo+Pte.+4502,+San+Isidro,+37530+Le%C3%B3n,+Gto./@21.1046092,-101.6490082,15.75z/data=!4m18!1m8!3m7!1s0x842bbe438f9a4ed5:0xe607fb7138994b91!2sCentro+de+Negocios+Plaza+K2!8m2!3d21.103387!4d-101.6437823!15sCj5CbHZyLiBNYXJpYW5vIEVzY29iZWRvIC4gNDUwMiwgRmxvcmVzIE1hZ29uLCAzNzM1MCBMZcOzbiwgR3RvLlo5IjdibHZyIG1hcmlhbm8gZXNjb2JlZG8gNDUwMiBmbG9yZXMgbWFnb24gMzczNTAgbGXDs24gZ3RvkgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F11bbt3c_s_!4m8!1m0!1m5!1m1!1s0x842bbe438f9a4ed5:0xe607fb7138994b91!2m2!1d-101.6437823!2d21.103387!3e2?entry=ttu" className="btn" style={{color: '#ff0000'}}>
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