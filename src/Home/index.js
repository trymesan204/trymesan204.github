import React from 'react';
import './Home.css';
import pp from '../img/pp.png';

const Home = () => {
    return (
        <>
            <div className='photo-background'>
                <img src={pp} className='photo' alt="I, me and myself"/>
            </div>
        </>
    )
}

export default Home;