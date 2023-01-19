import React from 'react';
import './Home.css';
import pp from '../img/pp.png';

const Home = () => {
    return (
        <>
            <div className='photo-background'>
                <div className='main-content'>
                    <img src={pp} className='photo' alt='I, me and myself'/>
                </div>
            </div>
            <div className='whole-content'>
                <div className='main-content'>
                    <div className='introduction'>
                        <h1>Yo 🤪, I am Sandesh Prasad Upadhyaya </h1><br/>
                        <p>
                            I am a Computer Engineer graduated from Pulchowk Campus. I have 3+ years of experience
                            in Software Development. I have worked on techstacks such as HTML/CSS/Javascript,
                            ReactJs, NodeJs, .net, Groovy and Grails and Android Programming with Java. I have practice
                            mainly of SQL databases like MySQL and SQLite.<br/><br/>
                            Other than professional career, I like reading books. Once in a fortnite, I try to write
                            but fail successfully. Lol. I also have a hobby of reading old Nepali literatures.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;