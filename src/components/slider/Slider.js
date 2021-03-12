import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import slides from './Slides';
import "./slider.css";

const slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Portfolio</h2>
            </div>

            <Carousel
                arrows
                sliderPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides = {slides}
                breakpoints ={{
                    960:{
                        sliderPerPage:1,
                        arrows:false,
                        itemWidth:250,
                    }
                }}
                />
        </div>
    )
}

export default slider
