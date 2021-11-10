import React from 'react';
import './Header.css';
import orang_duduk from './aset design/orang duduk di kayu.svg';
import petunjuk from './aset design/Petunjuk Jalan.svg';
import batu from './aset design/batu.svg';
import daun from './aset design/daun.svg';
import grass from './aset design/grass.svg';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="header-container">
                    <div className="header-items">
                        <div className='center-items'>
                            <h1 className='tagline'>Find Your Dream, Explore The Future</h1>
                            <h1 className='betis'>BETIS 2022</h1>
                            <button className='login2'> LOG IN</button>
                        </div>
                        <div className='orang-duduk-container'>
                            <img className='orang-duduk' src={orang_duduk} alt="orang duduk di kayu" />
                            <img className='grass1' src={grass} alt="daun1" />
                            <img className='grass2' src={grass} alt="daun2" />
                        </div>
                        <div className='petunjuk-container'>
                            <img className='petunjuk' src={petunjuk} alt="batu" />
                            <img className='batu1' src={batu} alt="batu" />
                            <img className='batu2' src={batu} alt="batu" />
                            <img className='daun' src={daun} alt="daun" />
                        </div>
                    </div>
                    <div className="header-bottom"></div>
                </div>
            </div>
        </>

    )
}

export default Header