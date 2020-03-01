import React, { Component } from 'react'
import '../EncounterCreation/EncountersCreation.css'
import EncountersCreationForm from './EncountersCreationForm/EncountersCreationForm'
import HeroImage from '../../Landing-Page/Hero Image/HeroImage'

class EncountersCreation extends Component {
  render() {
    return (
      <>
      <HeroImage />
      <EncountersCreationForm />
      </>
    )
  }
}

export default EncountersCreation