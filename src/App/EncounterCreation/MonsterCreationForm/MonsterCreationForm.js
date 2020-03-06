import React, { Component } from "react";
import "./MonsterCreationForm.css";
import DungeonContext from "../../../Context/DungeonContext";
class MonsterCreationForm extends Component {
    state = {
      currentEncounter: "",
      name: "",
      health: "",

    }
  
  static contextType = DungeonContext;

  componentDidMount(){
    if(localStorage.getItem('current-encounter')){
      const storageEncounter = localStorage.getItem('current-encounter')
      const jsonEncounter = JSON.parse(storageEncounter)
      this.setState({
        currentEncounter: jsonEncounter[0]
      })
    }
  }

    clearForm = () => {
      document.getElementById('monsterCreation-form').reset();
    }

    handleCreateMonster = event => {
      event.preventDefault();
        const {
            monsterName,
            monsterHealth,
            monsterArmor,
            monsterStatus
        } = event.target;

        console.log(monsterName.value)
        const url = "http://localhost:8000/api/monsters";
        const options = {
            method: "Post",
            body: JSON.stringify({
                name: monsterName.value,
                health: monsterHealth.value,
                armor_class: monsterArmor.value,
                status_effects: monsterStatus.value,
                encounter: this.state.currentEncounter.id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, options).then(res => {
            if (!res.ok) {
                throw new Error(
                    "There was an error; it seems your guide got lost in the dungeon!"
                );
            }
            return res.json();
        })
        .then(data => {
          this.setState({
            
          })
          this.clearForm()
        })
    };

    render() {
        return (
          
            <div className="monsterCreation-div1">
              <h2>{this.state.currentEncounter.names}</h2>
                <form
                    id="monsterCreation-form"
                    onSubmit={event => this.handleCreateMonster(event)}
                >
                    <label
                        className="monsterCreation-form-label"
                        htmlFor="monsterName"
                    >
                        Name:
                    </label>
                    <input type="text" id="monsterName" required />
                    <label
                        className="monsterCreation-form-label"
                        htmlFor="monsterHealth"
                    >
                        Health:
                    </label>
                    <input
                        type="number"
                        id="monsterHealth"
                        name="monsterHealth"
                        required
                    />
                    <label
                        className="monsterCreation-form-label"
                        htmlFor="monsterArmor"
                    >
                        Armor Class:
                    </label>
                    <input
                        type="number"
                        id="monsterArmor"
                        name="monsterArmor"
                        required
                    />
                    <label
                        className="monsterCreation-form-label"
                        htmlFor="monsterStatus"
                    >
                        Status Effects:
                    </label>
                    <input
                        type="text"
                        id="monsterStatus"
                        name="monsterStatus"
                        required
                    />
                    <button type="submit">Create Monster</button>
                </form>
            </div>
        );
    }
}

export default MonsterCreationForm;
