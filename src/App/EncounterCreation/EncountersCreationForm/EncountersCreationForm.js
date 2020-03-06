import React, { Component } from "react";
import "../EncountersCreation.css";
import DungeonContext from '../../../Context/DungeonContext'

class EncountersCreationForm extends Component {
  
  static contextType = DungeonContext

  handleSetLocalStorage = token => {
    const newToken = JSON.stringify(token)
    localStorage.setItem('current-encounter', newToken)
  }

  handleEncounterPost = event => {
        event.preventDefault();
        const { encounterName } = event.target;
        const url = "http://localhost:8000/api/encounters";
        const options = {
            method: "Post",
            body: JSON.stringify({
                names: encounterName.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, options)
          .then(res => {
            if(!res.ok) {
              throw new Error("There was an error; it seems your guide got lost in the dungeon!")
            }
            return res.json()
          })
          .then(data => {
            this.context.handleCreatedEncounter(data)
            this.handleSetLocalStorage(data)
            this.props.handleSwitch()
          })
    };

    render() {
        return (
            <form className="encountersCreation-form" onSubmit={event => this.handleEncounterPost(event)}>
                <label htmlFor="encounterName">
                    Enter Your Encounter Name:{" "}
                </label>
                <input
                    type="text"
                    id="encounterName"
                    name="encounterName"
                    required
                />
                <button>Create Encounter</button>
            </form>
        );
    }
}

export default EncountersCreationForm;
