import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { setSearchTerm } from '../../redux/reddit';

import './Searchbar.css';

export default function Searchbar() {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const submitTerm = (e) => {
        // stop propagation
        e.preventDefault();
        //filter results
        dispatch(setSearchTerm(inputValue));
    }

    return (
        <div className="searchbar">
            <form className="search" onSubmit={submitTerm}>
                <label htmlFor="searchbar"></label>
                <input 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search posts" 
                    value={inputValue} 
                    onChange={handleChange}
                />
                <button type="submit" aria-label="Search">
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}
