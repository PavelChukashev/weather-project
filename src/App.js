import React from 'react'
import Header from './components/header/Header'
import './App.css'
import Weather from './components/Weather/Weather'
import Footer from './components/footer/Footer'

export default function App() {
    return (
        <>
            <Header/>
            <Weather/>
            <Footer/>
        </>
    )
}
