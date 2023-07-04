import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Table from 'react-bootstrap/Table';

function Shedule() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <SheduleStyle>
        <div className="Horarios"> 
        <Slider {...settings}>
        <div className="Horariosbox">
          <h3>LUNES</h3>
          
        </div>
        <div className="Horariosbox">
          <h3>MARTES</h3>
        </div>
        <div className="Horariosbox">
          <h3>MIERCOLES</h3>
        </div>
        <div className="Horariosbox">
          <h3>JUEVES</h3>
        </div>
        <div className="Horariosbox">
          <h3>VIERNES</h3>
        </div>
        </Slider>
      </div>
      </SheduleStyle>
      )
}

export default Shedule

const SheduleStyle=styled.div`
.Horarios{
   padding: 0px 40px 0 40px;
   background-color: rgb(255, 255, 255);
   color: rgb(0, 0, 0);
   height: calc(100vh - 60px);
   width: 100%;
}

.Horariosbox{

   backdrop-filter: blur(50px);
   border-radius: 50px;
   background-color: rgb(0, 0, 0);
   height: 400px;
   color: white;
}
.Horariosbox h3{
   text-align: center;
}
.slick-slide div{
   margin: 0 0rem;
}
.slick-dots li.slick-active button::before{
   color: rgb(0, 0, 0) !important;
}
.slick-dots li button::before{
   color: rgb(0, 0, 0) !important;
   font-size: 1rem !important;
}
.slick-prev:before, .slick-next:before {
   
   color: #000000 !important;
}

  
`;