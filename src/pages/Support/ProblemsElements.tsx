import React from 'react';
import ProblemsElement from "./ProblemsElement";

import payment from './img/payment.svg'
import refund from './img/refund.svg'
import deliver from './img/delivery.svg'

const ProblemsElements = () => {
    return (
        <div className="problems-elements">
            <ProblemsElement image={payment} title='Оплата' />
            <ProblemsElement image={deliver} title='Доставка' />
            <ProblemsElement image={refund} title='Возврат' />
            <ProblemsElement image={refund} title='Возврат' />
        </div>
    );
};

export default ProblemsElements;