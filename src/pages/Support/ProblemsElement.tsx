import React from 'react';
import './ProblemsElement.scss'

interface ProblemsElementProps {
    image: string,
    title: string,
}

const ProblemsElement = (props: ProblemsElementProps) => {
    return (
        <div className="problems-elements__frame">
            <div className="problems-elements__item">
                <p className="problems-elements__title">{props.title}</p>
                <img className="problems-elements__image" src={props.image} />
            </div>
        </div>
    );
};

export default ProblemsElement;