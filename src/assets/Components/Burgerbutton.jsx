import React from 'react'
import styled from 'styled-components'

function Burgerbutton(props) {
  return (
    <Burger>
     <div onClick={props.handleClick} className={`nav-icon1 ${props.clicked ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  </Burger>
  )
}

export default Burgerbutton

const Burger=styled.div`
.nav-icon1{
  width: 60px;
  height: 30px;
  position: relative;
   margin: 10px auto; 
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.nav-icon1 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 80%;
  background: #ffffff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.nav-icon1 span:nth-child(1) {
  top: 0px;
}

.nav-icon1 span:nth-child(2) {
  top: 15px;
}

.nav-icon1 span:nth-child(3) {
  top: 30px;
}

.nav-icon1.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.nav-icon1.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

`;
