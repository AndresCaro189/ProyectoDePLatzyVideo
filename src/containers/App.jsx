import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API ='http://localhost:3000/initalState';

const App = () => {
    const initialState = useInitialState(API);
    //console.log(videos);

    return (
        <div className='App'>
            <Header></Header>
            <Search></Search>

            {initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {initialState.mylist.map(item=>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item=>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de PLatzi Video">
                <Carousel>
                    {initialState.originals.map(item=>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                    )}
                </Carousel>
            </Categories>

            <Footer></Footer>
        </div>
        );
    }


export default App;