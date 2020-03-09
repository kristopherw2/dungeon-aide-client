import React, { Component } from "react";
import "./MonsterCreationForm.css";
import DungeonContext from "../../../Context/DungeonContext";
import MonsterCreatedList from "../MonsterCreatedList/MonsterCreatedList";
import { withRouter } from 'react-router-dom'
class MonsterCreationForm extends Component {
    state = {
        currentEncounter: "",
        name: "",
        health: "",
        currentMonsters: [],
        error: null
    };

    static contextType = DungeonContext;

    componentDidMount() {
        if (localStorage.getItem("current-encounter")) {
            const storageEncounter = localStorage.getItem("current-encounter");
            const jsonEncounter = JSON.parse(storageEncounter);
            const toObjectEncounter = jsonEncounter[0];
            this.setState({
                currentEncounter: toObjectEncounter
            });
            const url = `http://localhost:8000/api/monsters/encounter/${toObjectEncounter.id}`;
            const options = {
                method: "Get",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        currentMonsters: [...data]
                    });
                });
        }
    }

    clearForm = () => {
        document.getElementById("monsterCreation-form").reset();
    };

    handleCreateMonster = event => {
        event.preventDefault();
        const {
            monsterName,
            monsterHealth,
            monsterArmor,
            monsterStatus
        } = event.target;

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

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(
                        "There was an error; it seems your guide got lost in the dungeon!"
                    );
                }
                return res.json();
            })
            .then(data => {
                this.setState({
                    currentMonsters: [...this.state.currentMonsters, ...data]
                });
                this.clearForm();
            });
    };

    handleDeleteMonster = monsterId => {
        const newMonstersArray = [];
        this.state.currentMonsters.filter(item => {
            return item.id !== monsterId ? newMonstersArray.push(item) : null;
        });
        const url = `http://localhost:8000/api/monsters/${monsterId}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(
                        "There was an error; it seems your guide got lost in the dungeon!"
                    );
                }
                return res;
            })
            .then(data => {
                this.setState({
                    currentMonsters: [...newMonstersArray]
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    };

    handleRouteToEncounters = event => {
        localStorage.clear();
        this.props.history.push("/Encounters");
    };

    render() {
        return (
            <div className="monsterCreation-div1">
                <h2>{this.state.currentEncounter.names}</h2>
                <button className="backToLanding-monsterCreationForm" onClick={() => this.handleRouteToEncounters()}>
                    Take me back to the landing
                </button>
                {this.state.error}
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

                <MonsterCreatedList
                    updateMonsters={this.state.currentMonsters}
                    deleteMonsters={event => this.handleDeleteMonster(event)}
                />
            </div>
        );
    }
}

export default withRouter(MonsterCreationForm);
