import React,{useState} from 'react';
import styled from 'styled-components';
import Burgerbutton from './Burgerbutton';


function Navbar() {
  const[clicked, setClicked]= useState(false)
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
    <NavContainer>
      <a href="/">MAMBO HOUSE</a>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a href="/">Inicio</a>
        <a href="/">Nosotros</a>
        <a href="/">Escuela</a>
        <a href="/">Contacto</a>
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

const NavContainer = styled.nav`
  display:flex;
  font-size: 1.2em;
  padding: .4rem;
  background-color:Black;
  justify-content: space-between;
  align-items:center;
  color: white;
  
  
  a{
   
    color:white;
    text-decoration:none;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.2em;
  }
  
  .links{
   position: absolute;
   top:-700px;
   right: 0;
   left: -2000px;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   transition:all .6s ease;
   a{
    color:black;
    font-size: 1.2em;;
    display: block;
   }
   @media(min-width:768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1.2rem;
      color: white;
      display: inline;
    }

   }
  }

  .links.active{
    width: 100%;
    display:block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top:30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
    font-size: 2rem;
    color: white;
    margin-top: 1rem;
   }
  }
  .Burger{
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const Bgdiv = styled.div`
position: absolute;
background-color: black;
top:-7000px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: all .6s ease;
&.active{
  border-radius: 0 0 80% 0;
top:0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
}
`;