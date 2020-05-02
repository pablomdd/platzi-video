import React from 'react';
import Header from '../components/Header';
import Search  from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import '../assets/styles/App.scss'

const App = () => (
    <div className = "App"> 
        <Header/>
        <Search />
        <Categories>
            <Carrousel>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
                <CarrouselItem/>
            </Carrousel>
        </Categories>
    </div>
);

export default App;