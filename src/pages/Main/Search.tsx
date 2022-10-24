import React, {useState} from 'react';
import './Search.scss'
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    let [search, setSearch] = useState()
    console.log(search)

    const searchHandler = function () {
        navigate(`/products/search/${search}`);
    }

    // useEffect(() => {
    //     input.addEventListener('keydown', e => {
    //         console.log(e.code)
    //         if (e.code == 'Enter') {
    //             searchHandler()
    //         }
    //     })
    // }, [])


    return (
        <div className="search">
            <input id='input' className='search__input' onChange={e => setSearch(e.target.value)} value={search}/>
            <div className="search__button" onClick={searchHandler}>
                <svg className='search__logo' width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5634 14.8499L12.8336 9.65596C13.7228 8.61396 14.2037 7.33997 14.2037 5.99997C14.2037 4.39598 13.5132 2.89199 12.2644 1.75799C11.0156 0.623997 9.35204 0 7.58477 0C5.81751 0 4.15395 0.625997 2.90517 1.75799C1.65419 2.88999 0.96582 4.39598 0.96582 5.99997C0.96582 7.60197 1.6564 9.10996 2.90517 10.242C4.15395 11.376 5.81531 11.9999 7.58477 11.9999C9.06301 11.9999 10.4662 11.564 11.6157 10.76L17.3455 15.9519C17.3623 15.9672 17.3823 15.9793 17.4042 15.9875C17.4262 15.9958 17.4497 16 17.4735 16C17.4973 16 17.5208 15.9958 17.5428 15.9875C17.5647 15.9793 17.5847 15.9672 17.6015 15.9519L18.5634 15.0819C18.5802 15.0667 18.5936 15.0486 18.6027 15.0287C18.6118 15.0088 18.6164 14.9875 18.6164 14.9659C18.6164 14.9444 18.6118 14.9231 18.6027 14.9032C18.5936 14.8833 18.5802 14.8652 18.5634 14.8499ZM11.0796 9.16796C10.1441 10.014 8.90415 10.48 7.58477 10.48C6.2654 10.48 5.02545 10.014 4.08997 9.16796C3.15669 8.31996 2.64262 7.19597 2.64262 5.99997C2.64262 4.80398 3.15669 3.67798 4.08997 2.83199C5.02545 1.98599 6.2654 1.51999 7.58477 1.51999C8.90415 1.51999 10.1463 1.98399 11.0796 2.83199C12.0129 3.67998 12.5269 4.80398 12.5269 5.99997C12.5269 7.19597 12.0129 8.32196 11.0796 9.16796Z" fill="#292929" fill-opacity="0.4"/>
                </svg>
            </div>
        </div>
    );
};

export default Search;