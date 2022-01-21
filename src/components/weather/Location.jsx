import { Input } from '@mui/material';
import GoogleMap from './GoogleMap.jsx';
import React, { useState } from 'react';

function Location() {

    const [inputValue, setInputValue] = useState('');

    function handleClick (e) {
        e.preventDefault()
        setInputValue('')
    }

    return (
        <div className='location-container'>
            <form className='search-form'>
                <Input 
                    placeholder='Введите город...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                    type="submit"
                    onClick={handleClick}
                >Найти</button>
            </form>
            <GoogleMap/>
        </div>
    )
}

export default Location;




// API Key for maps -->
// AIzaSyDMqJ9TMB7zE7h9iSs4zFXrBDQYu77-FEs

// Open Weather API Key -->
// ed4f78a0b515380f6adf5068d2777e3f