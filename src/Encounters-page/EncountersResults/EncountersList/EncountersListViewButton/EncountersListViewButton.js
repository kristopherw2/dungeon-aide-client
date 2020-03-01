import React, { Component } from 'react';
import DungeonContext from '../../../../Context/DungeonContext'
import { render } from '@testing-library/react';

class EncountersListViewButton extends Component {

  static contextType = DungeonContext

  render(){
    return(
      <button>View</button>
    )
  }
}

export default EncountersListViewButton