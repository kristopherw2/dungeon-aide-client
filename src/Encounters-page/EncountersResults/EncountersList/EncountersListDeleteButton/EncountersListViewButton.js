import React, { Component } from "react";
import DungeonContext from "../../../../Context/DungeonContext";

export default class EncountersListDeleteButton extends Component {
  static contextType = DungeonContext

    handleDeleteEncounter = encounterId => {
        let newEncountersArray = [];
        this.context.encountersArray.filter(item =>
            item.id !== encounterId ? newEncountersArray.push(item) : null
        );

        const url = `http://localhost:8000/api/encounters/${this.props.encounterId}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Oh no! There was an error!");
                }
                return res;
            })
            .then(data => {
              this.context.handleUpdateEncountersArray(newEncountersArray)
            });
    };

    render() {
        console.log(this.props.encounterId);
        return (
            <button
                onClick={() =>
                    this.handleDeleteEncounter(this.props.encounterId)
                }
            >
                Delete
            </button>
        );
    }
}
