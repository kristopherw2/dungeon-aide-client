import React, { Component } from "react";
import "./MonsterCreationForm.css";
import DungeonContext from "../../../Context/DungeonContext";
import MonsterCreatedList from "../MonsterCreatedList/MonsterCreatedList";
import { withRouter } from "react-router-dom";
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
            const url = `https://fierce-stream-23166.herokuapp.com/api/monsters/encounter/${toObjectEncounter.id}`;
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
        const numberRegex = /^[+]?([.]\d+|\d+[.]?\d*)$/;
        const numberMonsterHealth = parseInt(monsterHealth.value, 10);
        const numberMonseterArmor = parseInt(monsterArmor.value, 10);
        console.log(numberMonsterHealth !== numberRegex);
        console.log(`${numberMonseterArmor} ${numberMonsterHealth}`);

        if (numberMonsterHealth < 0 || numberMonseterArmor < 0) {
            this.setState({
                error: "Health and Armor must be positive numbers"
            });
            return;
        } else if (
            monsterHealth.value.length > 4 ||
            monsterName.value.length > 36 ||
            monsterArmor.value.length > 4 ||
            monsterStatus.value.length > 36
        ) {
            this.setState({
                error: "Please keep the character count below 36 Name and Status and 4 digits for Health and Armor"
            });
            return
        }

        const url = "https://fierce-stream-23166.herokuapp.com/api/monsters";
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
                    currentMonsters: [...this.state.currentMonsters, ...data],
                    error: ""
                });
                this.clearForm();
            });
    };

    handleDeleteMonster = monsterId => {
        const newMonstersArray = [];
        this.state.currentMonsters.filter(item => {
            return item.id !== monsterId ? newMonstersArray.push(item) : null;
        });
        const url = `https://fierce-stream-23166.herokuapp.com/api/monsters/${monsterId}`;
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
        if (this.state.currentMonsters.length === 0) {
            this.setState({
                error: "Please create at least one monster per encounter!"
            });
            return;
        } else {
            localStorage.clear();
            this.props.history.push("/Encounters");
        }
    };

    render() {
        return (
            <>
                <div className="monsterCreation-div1">
                    <h2>{this.state.currentEncounter.names}</h2>
                    <button
                        className="backToLanding-monsterCreationForm"
                        onClick={() => this.handleRouteToEncounters()}
                    >
                        Take me back
                    </button>
                    <p style={{color: "white"}}>{this.state.error}</p>
                    <form
                        id="monsterCreation-form"
                        onSubmit={event => this.handleCreateMonster(event)}
                    >
                        <label
                            className="monsterCreation-form-label"
                            htmlFor="monsterName"
                        >
                            Name:
                            <input type="text" id="monsterName" required />
                        </label>
                        <label
                            className="monsterCreation-form-label"
                            htmlFor="monsterHealth"
                        >
                            Health:
                            <input
                                type="number"
                                id="monsterHealth"
                                name="monsterHealth"
                                required
                            />
                        </label>
                        <label
                            className="monsterCreation-form-label"
                            htmlFor="monsterArmor"
                        >
                            Armor Class:
                            <input
                                type="number"
                                id="monsterArmor"
                                name="monsterArmor"
                                required
                            />
                        </label>
                        <label
                            className="monsterCreation-form-label"
                            htmlFor="monsterStatus"
                        >
                            Status Effects:
                            <input
                                type="text"
                                id="monsterStatus"
                                name="monsterStatus"
                                required
                            />
                        </label>
                        <button type="submit">Create Monster</button>
                    </form>
                </div>
                <MonsterCreatedList
                    updateMonsters={this.state.currentMonsters}
                    deleteMonsters={event => this.handleDeleteMonster(event)}
                />
            </>
        );
    }
}

export default withRouter(MonsterCreationForm);
