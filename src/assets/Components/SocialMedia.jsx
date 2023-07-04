
import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
    const [isBtnsOpen, setIsBtnsOpen] = useState(false);

    const toggleBtns = () => {
    setIsBtnsOpen(!isBtnsOpen);
    const Btns = document.querySelector(".btns");
    const add = document.getElementById("add");
    const remove = document.getElementById("remove");
    const btn = document.querySelector(".btns").querySelectorAll("a");
    
    Btns.classList.toggle("open");
    if (Btns.classList.contains("open")) {
      remove.style.display = "block";
      add.style.display = "none";
      btn.forEach((e, i) => {
        setTimeout(() => {
        let bottom = 40 * i; bottom = 40 * i;
          e.style.bottom = bottom + "px";
          console.log(e);
        }, 100 * i);
      });
    } else {
      add.style.display = "block";
      remove.style.display = "none";
      btn.forEach((e, i) => {
        e.style.bottom = "0px";
      });
    }
};
    
      
  return (
    <SocialMediaStyle>
    <div className="fabs" >
    <div className="action" onClick={toggleBtns}>
    <i id="add"><FontAwesomeIcon icon={faPlus} /></i>
    <i id="remove" style={{display:'none'}}><FontAwesomeIcon icon={faTimes}/></i>
    </div>

    <div className="btns">
    <a href="https://www.facebook.com/Mambohouse77/?mibextid=ZbWKwL" className="btn" style={{background: '#3b5999'}}>
    <i><FontAwesomeIcon icon={faFacebook}/></i>    
    </a>
    <a href="https://www.facebook.com/Mambohouse77/?mibextid=ZbWKwL" className="btn" style={{background: '#25D366'}}>
    <i><FontAwesomeIcon icon={faWhatsapp}/></i>    
    </a>
    <a href="https://www.facebook.com/Mambohouse77/?mibextid=ZbWKwL" className="btn" style={{background: '#e4405f'}}>
    <i><FontAwesomeIcon icon={faInstagram}/></i>    
    </a>
      
    </div>
  </div>
  </SocialMediaStyle>
   
  )
}

export default SocialMedia
const SocialMediaStyle=styled.div`
.fabs {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 30;
}

.action {
  background: rgb(0, 0, 0);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 5px 7px 0px rgb(80, 79, 79);
  transition: background-color 0.4s ease-in-out;
}

.action i {
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  cursor: pointer;
}

.action:hover {
  background-color: rgb(0, 0, 0);
}

.btn {
  position: absolute;
  height: 35px;
  width: 35px;
  border-radius: 50%;
}

.btn i {
  position: absolute;
  font-size: 18px;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
}

.btns {
  position: absolute;
  bottom: 0px;
  margin-bottom: 5px;
  height: 35px;
  width: 35px;
  transition: 0.3s ease-in-out;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
.btns.open {
  bottom: 50px;
}

`;
