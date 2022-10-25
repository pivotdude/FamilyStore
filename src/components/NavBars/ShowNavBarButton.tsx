import React, {useState} from 'react';
import './ShowNavBarButton.scss'
import NavBarOnFullScreen from "./NavBarOnFullScreen";

const ShowNavBarButton = () => {

    let [isShowFullNav, setIsShowFullNav] = useState(false)

    function showFullNav() {
        let main = document.querySelector('main') as HTMLElement
        main.style.display = 'none'
        setIsShowFullNav(true)
    }

    function changeStateFullNav() {
        setIsShowFullNav(false)
    }

    if (isShowFullNav) {
        return <NavBarOnFullScreen changeStateFullNav={changeStateFullNav} />
    }

    return (
        <a className='HideNavBar__button' onClick={showFullNav}>0</a>
    );
};

export default ShowNavBarButton;