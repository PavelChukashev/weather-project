import React from 'react';
import Weather from './Weather.jsx';
import Location from './Location.jsx';

export default function MainContent() {
  return (
    <div className='main-container'>
        <Weather/>
        <Location/>
    </div>
  )
}
