import React from 'react';
import '../assets/styles/components/Carrousel.scss';


const Carrousel = ({ children }) => ( 
    <section class="carousel">
        <div class="carousel__container">
            { children }
        </div>
    </section>
 );

 
export default Carrousel;