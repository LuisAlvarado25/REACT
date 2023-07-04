import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Burgerbutton from './Burgerbutton';
import { Link,NavLink } from 'react-router-dom';


function Navbar() {
  
  const[clicked, setClicked]= useState(false)

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
    <NavContainer>
      <NavLink className='container_link' to="/" onClick={() => setClicked(false)}>MAMBO HOUSE</NavLink>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <NavLink className='link' to="/"         onClick={() => setClicked(false)}>Inicio</NavLink>
        <NavLink className='link' to="/About"    onClick={() => setClicked(false)}>Nosotros</NavLink>
        <NavLink className='link' to="/School"   onClick={() => setClicked(false)}>Escuela</NavLink>
        <NavLink className='link' to="/Horarios" onClick={() => setClicked(false)}>Horarios</NavLink>
      </div>
     <div className='Burger'>
     <Burgerbutton clicked={clicked} handleClick={handleClick}></Burgerbutton>
     </div>
      <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
     </NavContainer>
    </>
  )
}

export default Navbar

//Initial Settigs 
  const NavContainer = styled.nav`
  display:flex;
  height: 6.0rem;
  justify-content: space-between;
  align-items:center;
  background-color: #000000;
  box-shadow: 10px 10px 50px black;
  
  .container_link{
    font-size: 3.0rem;
    color: #ffffff;
    text-decoration:none;
    margin-left: 2rem;
  }

  .link{
    font-size: 2.5rem;
    color: #ffffff;
    text-decoration:none;
    margin-right:2rem;
  }

//Style Links
.links{
   position: absolute;
   top:-700px;
   right: 0;
   left: -2000px;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   transition:all .6s ease;
  //When the screen is greather tha 768px
 @media(min-width:768px){
    position: initial;
    margin: 0;
    .link{
      text-decoration: none;
      color: #fffefe;
      display: inline;
    }
   }
}

 //When the burger Button is activate
  .links.active{
    display:block;
    position: absolute;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    top:30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index:2;
   
    .link{
    display: block;
    font-size: 4.0rem;
    margin-top: 1rem;
    
   }
  }

//The burger button is show when the scroll have a minum of 768 px
.Burger{
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
// This is a background when the navbar is display in movil version.
const Bgdiv = styled.div `
position: absolute;
top:-7000px;
left: -1000px;
width: 100%;
height: calc(100vh - 6.0rem);
background-color: black;
transition: all .6s ease;
z-index: 1;

&.active{
top: 59px;
left: 0;
width: 100%;
height: calc(100vh - 6.0rem);
}
`;