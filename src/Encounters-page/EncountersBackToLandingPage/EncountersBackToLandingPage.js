import React, { Component } from 'react';
import '../EncountersBackToLandingPage/EncountersBackToLanding.css'
import { withRouter } from 'react-router-dom'

class EncountersBackToLandingPage extends Component {
  
  
  handleReturnToLanding = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='encountersBackToLanding-div'>
      <button onClick={() => this.handleReturnToLanding()}>Back To Landing</button>
      </div>
    )
  }
}

export default withRouter(EncountersBackToLandingPage)