import React from 'react';

import perfilPhoto from '../../assets/img-perfil/1686448730452.jpg';

import '../ProfileInfo/ProfileInfo.css';

function ProfileInfo() {
    return (
        <>
        <section className='container-img-perfil-profile-info'>
            <div className='outliner-container'>
                <div className='container-img-perfil'>
                    <img src={perfilPhoto} className='photo-perfil' alt="perfil-photo" />
                </div>
            </div>
            <div className='container-profile-info'>
                <div>
                    <p className='text-center t-bold'>1</p>
                    <p className='fs-14'>publicaciones</p>
                </div>
                <div>
                    <p className='text-center t-bold'>8,239</p>
                    <p className='fs-14'>seguidores</p>
                </div>
                <div>
                    <p className='text-center t-bold'>38</p>
                    <p className='fs-14'>seguidos</p>
                </div>
            </div>
        </section>
        <section className='container-info'>
           <div>
            <p className='fw-500 fs-12'>Pedro Sánchez</p>
            <p className='fs-10'>Frontend Developer</p>
            <p className='fs-10'>Tecnologías: React, JavaScript, CSS, Html, NestJs</p>
            <p className='fs-10'>Github: <a href="https://www.github.com/PedroSa133" target='_blank'>github.com/PedroSa133</a></p>
            <p className='fs-10'>LinkedIn: <a href="https://www.linkedin.com/in/sanchezpedroa/" target='_blank'>linkedin.com/in/sanchezpedroa</a></p>
           </div>
        </section>
        </>
    )
}

export default ProfileInfo