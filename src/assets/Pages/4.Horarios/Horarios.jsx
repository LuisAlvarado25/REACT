import './Horarios.css';
import Shedule from '../../Components/Shedule';

const Horarios = () => {
 
  return (
<div className="horarios-container">
   <div className="Sucursal Valle">
    <div className='horarios'>
     <h1>VALLE DE SEÑORA</h1>
     <hr className="divider"></hr>
     <h2>LUNES & MIERCOLES</h2>
       <div className='container'>
         <ul>
         <li>7:30 P.M - Salsa Básicos</li>
         <li>8:30 P.M - Bachata Nivel 1</li>
        </ul>
       </div>
    <h2>MARTES & JUEVES</h2>
        <div className='container'>
         <ul>
          <li>8:30 P.M - Salsa Nivel 1</li>
           <li>9:00 P.M - Entrenamiento para bailarines</li>
          </ul>
        </div>
     </div>
  </div>
<div className="Sucursal Mariano">
   <div className='horarios'>
  <h1>MARIANO ESCOBEDO</h1>
  <hr className="divider"></hr>
  <h2>MARTES & JUEVES</h2>
  <div className='container'>
  <ul>
    <li>7:00 P.M - Bachata Básicos</li>
    <li>8:00 P.M - Salsa Básicos</li>
    <li>9:00 P.M - Salsa Nivel 1</li>
  </ul>
</div>
</div>
    </div>
 </div>
  )
}

export default Horarios