import React from 'react';
import './Footer.css';
import instagram from './aset design/Instagram.svg';
import youtube from './aset design/Youtube.svg';
import email from './aset design/envelope.svg';
import location from './aset design/location.svg';
import daun from './aset design/daun.svg';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="social-media">
                        <span className='title'>FOLLOW US ON SOCIAL MEDIA</span>
                        <img className='insta' src={instagram} alt="instagram" />
                        <img src={youtube} alt="youtube" className="youtube-logo" />
                    </div>
                    <div className="email">
                        <img src={email} alt="email" className="email-logo" />
                        <span className='title'>EMAIL US AT</span>
                        <p className='description'>bemfasilkom@gmail.com</p>
                    </div>
                    <div className="location">
                        <img src={location} alt="" className="location-logo" />
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
