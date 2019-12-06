import React from 'react'
import NavBar from '../Nav-Bar/nav-bar'
import HeroImage from './Hero Image/hero-image'
import DungeonAide from './Dungeon-Aide-Description/dungeon-aide-description'
import Overview from './Overview/overview'


export default function LandingPage() {
    return(
        <>
        <NavBar/>
        <HeroImage/>
        <DungeonAide/>
        <Overview/>
        </>
    )
}