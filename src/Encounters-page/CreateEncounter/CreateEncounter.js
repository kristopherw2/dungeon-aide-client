import React, { Component } from 'react';
import DungeonContext from '../../Context/DungeonContext'
import '../CreateEncounter/CreateEncounter.css'
import { withRouter } from 'react-router-dom'

class CreateEncounter extends Component {

  static contextType = DungeonContext

  handleRouteToEncountersCreation = () => {
    this.props.history.push('/encountercreate')
  } 

  render() {
    return (
      <div className='createEncounter-div'>
        <p>If you want to contribute click here</p>
        <button onClick={() => this.handleRouteToEncountersCreation()}>Click to contribute!</button>
      </div>
    )
  }
}

export default withRouter(CreateEncounter)