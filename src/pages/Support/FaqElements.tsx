import React from 'react';
import FaqElement from "./FaqElement";
import './FaqElements.scss'

const FaqElements = () => {
    return (
        <div className='FAQ'>
            <p className='FAQ__title'>Часто задаваемые вопросы</p>
            <FaqElement title='Как можно оплатить товар?' content='Для того чтобы оплатить товар, добавте товар в коризну и нажмите на кнопку оплатить' />
            <FaqElement title='Вернуть де' content='Для того чтобы оплатить товар, добавте товар в коризну и нажмите на кнопку оплатитьДля того чтобы оплатить товар, добавте товар в коризну и нажмите на кнопку оплатитьДля того чтобы оплатить товар, добавте товар в коризну и нажмите на кнопку оплатить' />
        </div>
    );
};

export default FaqElements;