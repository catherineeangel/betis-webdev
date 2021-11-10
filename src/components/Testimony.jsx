import React from 'react';
import './Testimony.css';
import icon_orang from './aset design/Icon Orang.png';

const Testimony = (props) => {
    return (
        <>
            <div className='testimony-container' style={props.color}>
                <img className='user' src={icon_orang} alt="" />
                <span className='name'>Yulita</span>
                <span className='desc'>Peserta BETIS 2021</span>
                <p className='testi'>Aku seneng banget bisa belajar di BETIS 2021. Selain dapat ilmu, kakak-kakak yang ngajar asik banget aku jadi paham materinya. Terus mentor aku juga baik banget.</p>
            </div>  
        </>
    )
}

export default Testimony
