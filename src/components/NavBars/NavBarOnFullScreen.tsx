import React from 'react';
import './NavBarOnFullScreent.scss'

interface NavBarOnFullScreenProps {
    changeStateFullNav: string
}

const NavBarOnFullScreen = (props: NavBarOnFullScreenProps) => {

    function hideFullNav() {
        let main = document.querySelector('main')
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