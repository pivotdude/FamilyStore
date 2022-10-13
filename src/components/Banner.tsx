import React from 'react';
import './Banner.scss'

interface BannerProps {
    color: 'grey' | 'white' | 'pink',
    image: string,
}

const Banner = (props: BannerProps) => {
    return (
        <div className={'banner-bg ' + `banner-bg_${props.color}`}>
            <img className='banner banner-bg__banner' src={props.image} />
        </div>
    );
};

export default Banner;