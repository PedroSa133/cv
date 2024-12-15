import React from 'react';

import shareWhite from '../../assets/light-mode-icons/share-white.png';
import moreWhite from '../../assets/light-mode-icons/more-white.png';

import '../HeaderMenu/HeaderMenu.css';

function HeaderMenu() {
  return (
    <header className='header-menu'>
        <div>Usuario</div>
        <div className='container-icons-header'>
            <div>
                <img src={shareWhite} alt="share" />
            </div>
            <div>
                <img src={moreWhite} alt="more" />
            </div>
        </div>
    </header>
  )
}

export default HeaderMenu
