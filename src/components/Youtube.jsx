import React from 'react';
import './Youtube.css';

const Youtube = () => {
    return (
        <>
            <div className="youtube">
                <div className="youtube-container">
                        <h1 className='sponsor'>Special Thanks to Our Sponsor!</h1>
                        <div className="video-youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/53-Bn1z0Vwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                </div>            
            </div>  
        </>
    )
}

export default Youtube
