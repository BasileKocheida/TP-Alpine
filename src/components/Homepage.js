import React from 'react';
import './Configurateur.css';
import video from '../assets/video/HomePage.mp4';

const Homepage = () => (

    <div className='videodiv'>

        <video src={video} type='video/mp4' autoPlay muted loop height="auto" width="100%">
        </video>

        <div class="overlay">
            <h1>Alpine A110 Pure / Légende</h1>

            <p>
                Découvrez nos modèles !
            </p>
        </div>

    </div>

)

export default Homepage;