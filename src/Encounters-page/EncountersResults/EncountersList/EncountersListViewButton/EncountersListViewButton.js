import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import DungeonContext from "../../../../Context/DungeonContext";
class EncountersListViewButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ""
        };
    }

    static contextType = DungeonContext;

    handleSetLocalStorageEncounterName = token =>{
        localStorage.setItem("encounter-name", token)
    }

    handleSetLocalStorageMonsters = token => {
        const newToken = JSON.stringify(token);
        localStorage.setItem("current-monsters", newToken);
    };

    handleViewEncounterMonsters = encounterId => {
        const url = `http://localhost:8000/api/monsters/encounter/${encounterId}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Oh no! There was a problem!");
                }
                return res.json();
            })
            .then(data => {
                this.context.handleUpdateSelectedEncounter(data);
                this.context.handleUpdateCurrentEncounterName(this.props.encounterName)
                this.handleSetLocalStorageEncounterName(this.props.encounterName)
                this.handleSetLocalStorageMonsters(data)
                this.props.history.push("/viewencounter");
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    };

    render() {
        return (
            <button className="encountersListViewButton"
                onClick={() =>
                    this.handleViewEncounterMonsters(this.props.encounterId)
                }
            >
                View
            </button>
        );
    }
}

export default withRouter(EncountersListViewButton);
