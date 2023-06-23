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
      <a href="/REACT/Pages/Home">MAMBO HOUSE</a>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a href="/REACT/Pages/Home">Inicio</a>
        <a href="/REACT/Pages/About">Nosotros</a>
        <a href="/REACT/Pages/School">Escuela</a>
        <a href="/REACT/Pages/Horarios">Horarios</a>
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
  justify-content: space-between;
  align-items:center;
  background-color: #000000;
  height: 60px;
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
    a{
    font-size: 2rem;
    color: #ffffff;
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
top:-7000px;
left: -1000px;
width: 100%;
height: calc(100vh - 60px);
background-color: black;
transition: all .6s ease;
z-index: 1;

&.active{
border-radius: 0 0 50% 0;
top: 59px;
left: 0;
width: 100%;
height: calc(100vh - 60px);
}
`;