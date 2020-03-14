import React, { Component } from "react";
import "./EncountersResults.css";
import EncountersList from "./EncountersList/EncountersList";
import DungeonContext from "../../Context/DungeonContext";

class EncountersResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encountersArray: [],
            error: ""
            
        };
    }

    static contextType = DungeonContext;

    componentDidMount() {
        const url = `https://fierce-stream-23166.herokuapp.com/api/encounters`;
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
            })
            .catch(err => {
                this.setState({
                    error: err.message
                    
                })
            })
    }
    render() {
        return (
            <div className="encountersResults-div">
                <EncountersList />
                {this.state.error}
            </div>
        );
    }
}

export default EncountersResults;
