import React from 'react';

import arrowDown from '../../assets/light-mode-icons/arrowDown-white-16.png';

import '../SectionButtons/SectionButtons.css';

function SectionButtons() {
  return (
    <section className='container-buttons'>
      <button className='btn-principal t-bold'>Seguir</button>
      <button className='btn-principal btn-secondary t-bold'>Mensaje</button>
      <button className='btn-principal btn-secondary t-bold'>Suscribete</button>
      <button className='btn-principal btn-secondary t-bold btn-arrow'><img src={arrowDown} alt="arrow down" /></button>
    </section>
  )
}

export default SectionButtons;

