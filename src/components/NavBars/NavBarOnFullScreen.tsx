import React from 'react';
import './NavBarOnFullScreent.scss'

interface NavBarOnFullScreenProps {
    changeStateFullNav: Function
}

const NavBarOnFullScreen = (props: NavBarOnFullScreenProps) => {

    function hideFullNav() {
        let main = document.querySelector('main') as HTMLElement
        main.style.display = 'block'
        props.changeStateFullNav()
    }

    return (
        <div onClick={hideFullNav} className='NavBarOnFullscreen'>
            <p className='NavBarOnFullscreen__title'>Hello</p>
        </div>
    );
};

export default NavBarOnFullScreen;