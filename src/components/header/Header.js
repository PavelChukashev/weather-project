import React from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import './styles/style.css'

export default function Header() {
    const time = moment()
    return (
        <header className='main-header'>
            <h1>Weather</h1>
            <Moment interval={5000} format="DD.MM.YYYY hh:mm">{time}</Moment>
        </header>
    )
}
