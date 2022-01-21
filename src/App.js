import './App.css'
import React from 'react'
import MainContent from './components/weather'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function App() {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    )
}
