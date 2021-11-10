import React from 'react';
import './Footer.css';
import instagram from './aset design/Instagram.svg';
import youtube from './aset design/Youtube.svg';
import email from './aset design/envelope.svg';
import location from './aset design/location.svg';
import daun from './aset design/daun.svg';

const Footer = () => {
    
    const handleClick = value => () => {
        window.open(value);
    };

    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="social-media">
                        <span className='title'>FOLLOW US ON SOCIAL MEDIA</span>

                        <a onClick={handleClick("http://instagram.com/betisfasilkomui")}><img className='insta' src={instagram} alt="instagram" /></a>
                        <a onClick={handleClick("https://www.youtube.com/channel/UC69CPdeMOB4XorunV7GCg0A")}><img src={youtube} alt="youtube" className="youtube-logo" /></a>
                    </div>
                    <div className="email">

                        <a href="mailto:betisfasilkom@gmail.com"><img src={email} alt="email" className="email-logo" /></a>
                        <span className='title'>EMAIL US AT</span>
                        <p className='description'>bemfasilkom@gmail.com</p>
                    </div>
                    <div className="location">

                        <a onClick={handleClick("https://www.ui.ac.id/wp-content/plugins/leaflet-maps-marker/leaflet-fullscreen.php?marker=25")}><img src={location} alt="location" className="location-logo" /></a>
                        <span className="title">OUR LOCATION</span>
                        <p className='description'>Fakultas Ilmu Komputer Universitas Indonesia
                        Kampus UI Depok, Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat
                        16424</p>
                    </div>
                    <img className='daun-kanan' src={daun} alt="daun" />
                    <img className='daun-kiri' src={daun} alt="daun" />
                </div>

            </div>
        </>
    )
}

export default Footer
