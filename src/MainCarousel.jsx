import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
function MainCarousel(){
    return(
        
            <Carousel style={{"width":"100px"}}  autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false} showArrows={false}>
                <div>
                    <img src="./assets/hotel1.jpg" height="700rem" />
                    
                </div>
                <div>
                    <img src="./assets/hotel2.jpg"  height="700rem"  />
                    
                </div>
                <div>
                    <img src="./assets/hotel3.jpg"  height="700rem" />
                    
                </div>
            </Carousel>
        
    )
}
export default MainCarousel