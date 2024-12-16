import React from 'react';

import shareWhite from '../../assets/light-mode-icons/share-white.png';
import moreWhite from '../../assets/light-mode-icons/more-white.png';
import arrowLeftWhite from '../../assets/light-mode-icons/arrowLeft-white.png';


import '../HeaderMenu/HeaderMenu.css';

function HeaderMenu() {
  return (
    <header className='header-menu'>
        <div className='container-arrow-icon'>
            <img src={arrowLeftWhite} alt="" />
        </div>
        <p className='username fw-500'>PedroSanchez</p>
        <div className='container-icons-header'>
            <div className='container-shared-icon'>
                <img src={shareWhite} alt="share" />
            </div>
            <div className='container-more-icon'>
                <img src={moreWhite} alt="more" />
            </div>
        </div>
    </header>
  )
}

export default HeaderMenu
