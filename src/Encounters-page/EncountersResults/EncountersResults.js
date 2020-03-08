import React, { Component } from "react";
import "./EncountersResults.css";
import EncountersList from "./EncountersList/EncountersList";
import DungeonContext from "../../Context/DungeonContext";

class EncountersResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encountersArray: []
        };
    }

    static contextType = DungeonContext;

    componentDidMount() {
        const url = `http://localhost:8000/api/encounters`;
        const options = {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Oh no! There was a problem!");
                }
                return res;
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.context.handleUpdateEncountersArray(data);
            });
    }
    render() {
        return (
            <div className="encountersResults-div">
                <EncountersList />
            </div>
        );
    }
}

export default EncountersResults;
