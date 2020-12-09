import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playIco from '../assets/static/play.png'
import masIco from '../assets/static/más.png'
import fotoWoman from '../assets/static/Img-01.jpg'

const CarouselItem = () => (
    <div className="corousel-item">
        <img className="corousel-item__img" src={fotoWoman} alt="Woman" />
        <div className="corousel-item__details">
            <div>
                <img src={playIco} alt="PLay" />
                <img src={masIco}  alt="Mas" />

                <p  className="carousel-item__details--title">Woman</p>
                <p  className="carousel-item__details--subtitle">2019 16+ 114min</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;