import React, { Component } from 'react'


class EncountersCreationForm extends Component {
  render () {
    return (
        <form className="encountersCreation-form">
            <label htmlFor="encountername">Enter Your Encounter Name: </label>
            <input type="text" id="encountername" required />
            <button>Create Encounter</button>
        </form>
    );
  }
}

export default EncountersCreationForm