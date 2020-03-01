import React from 'react'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./Encounters.css"
import HeroImage from '../Landing-Page/Hero Image/HeroImage'
import EncountersResults from '../Encounters-page/EncountersResults/EncountersResults'
import CreateEncounter from './CreateEncounter/CreateEncounter'
import EncountersBackToLandingPage from './EncountersBackToLandingPage/EncountersBackToLandingPage'

class EncountersHomePage extends Component {


  render() {
    return (
        <div>
            <HeroImage />
            <CreateEncounter />
            <EncountersResults />
            <EncountersBackToLandingPage />
        </div>
    );
  }
}

export default withRouter(EncountersHomePage)