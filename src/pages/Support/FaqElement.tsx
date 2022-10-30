import React, {useEffect, useState} from 'react';
import plus from './img/plus.svg'
import './FaqElements.scss'

interface FaqElementProps {
    title: string,
    content: string,
}

const FaqElement = (props: FaqElementProps) => {

    let [isShowed, setIsShowed] = useState(true)

    const ShowContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        let node = e.target.parentNode.children[0].children[1]

        useEffect(() => {
            setIsShowed(true)
        }, [])

        // useEffect()


        if (!isShowed) {
            return <p>Null</p>
            //node.style.display = 'none'
        }
        // } else {
        //     node.style.display = 'block'
        // }

    }
    return (
        <div className='FAQ-element'>

            <div className='FAQ-element__info'>
                <p className='FAQ-element__title'>{props.title}</p>
                <p className='FAQ-element__content'>{props.content}</p>
            </div>

            <img onClick={ShowContent} className='FAQ-element__image' src={plus} />
        </div>
    );
};

export default FaqElement;