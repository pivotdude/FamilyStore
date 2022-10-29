import {useState} from "react";

export default function useInput(name: string, type: 'text' | 'email' | 'password' ) {
    const [value, setValue] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value, onChange, name, type
    }
}