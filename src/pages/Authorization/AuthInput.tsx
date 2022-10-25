import React from 'react';
import './AuthInput.scss'

interface AuthInputProps {
    placeholder: string,
    children: any,
}
// placeholder={props.placeholder}

const AuthInput = (props: AuthInputProps) => {
    return (
        <div className='auth'>
            <input type='text' className='auth__input' {...props} />
        </div>
    );
};

export default AuthInput;