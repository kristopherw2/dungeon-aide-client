import React, { Component } from 'react';
import DungeonContext from '../../../../Context/DungeonContext'
class EncountersListViewButton extends Component {

  static contextType = DungeonContext

  render(){
    return(
      <button>View</button>
    )
  }
}

export default EncountersListViewButton