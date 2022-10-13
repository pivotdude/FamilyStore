import React from 'react';
import './Ability.scss'
import one from './img/one.jpg'
import happy from './img/happy.png'
import team from './img/team.png'
import grow from './img/grow.png'


const Ability = () => {
    return (
        <div className="ability">
            <div className="ability__col1">
                <div className="ability__el">
                    <p className='ability__title'>Мы занимаемся продажами 1 год</p>
                    <img className='ability__image' src={one} />
                </div>
                <div className="ability__el">
                    <p className='ability__title'>Более 1000000 довольньных покупателей</p>
                    <img className='ability__image' src={happy} />
                </div>
            </div>
            <div className="ability__col2">
                <div className="ability__el">
                    <p className='ability__title'>Огромная команда профессионалов</p>
                    <img className='ability__image' src={team} />
                </div>
                <div className="ability__el">
                    <p className='ability__title'>И мы будем развиваться дальше!</p>
                    <img className='ability__image' src={grow} />
                </div>
            </div>
        </div>
    );
};

export default Ability;