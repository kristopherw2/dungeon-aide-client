import React, { Component } from "react";
import "./ViewEncounter.css";
import DungeonContext from "../../Context/DungeonContext";

class ViewEncounter extends Component {
    static contextType = DungeonContext;

    componentDidMount() {
        if (localStorage.getItem("current-monsters")) {
            const stringEncounterName = localStorage.getItem("encounter-name");
            const stringEncounter = localStorage.getItem("current-monsters");
            const toJsonEncounter = JSON.parse(stringEncounter);
            this.context.handleUpdateSelectedEncounter(toJsonEncounter);
            this.context.handleUpdateCurrentEncounterName(stringEncounterName);
        }
    }

    handleBackToEncountersPage = () => {
        localStorage.clear();
        this.props.history.push("/encounters");
    };

    render() {
        const displayMonstersFromEncounter = this.context.selectedEncounter.map(
            item => {
                return (
                    <div className="viewEncounter-div1">
                        <ul className="viewEncounter-ul">
                            <li>Name: {item.name}</li>
                            <li>Health: {item.health}</li>
                            <li>Armor Class: {item.armor_class}</li>
                            <li>Status Effect: {item.status_effects}</li>
                        </ul>
                    </div>
                );
            }
        );
        return (
            <div className="viewEncounter-div2">
                <h2 className="viewEncounter-h2">
                    {this.context.currentEncounterName}
                </h2>
                <button id="viewEncounter-backToEncounters" onClick={() => this.handleBackToEncountersPage()}>Back To Encounters</button>
                {displayMonstersFromEncounter}
            </div>
        );
    }
}

export default ViewEncounter;
