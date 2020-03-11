import React, { Component } from "react";
import "../EncountersList/EncountersList.css";
import DungeonContext from "../../../Context/DungeonContext";
import EncountersListViewButton from "./EncountersListViewButton/EncountersListViewButton";

export default class EncountersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredEncounter: ""
        };
    }
    static contextType = DungeonContext;

    handleEncounterSearchChange = event => {
        this.setState({
            filteredEncounter: event
        });
    };

    handleClearSearch = () => {
        this.userSearch.value = "";
        this.setState({
            filteredEncounter: ""
        });
    };
    render() {
        const encountersFiltered = this.context.encountersArray.filter(item => {
            return (
                item.names
                    .toLowerCase()
                    .indexOf(this.state.filteredEncounter.toLowerCase()) !== -1
            );
        });

        const displayEncounters = encountersFiltered.map((item, index) => {
            return (
                <div key={index} className="encountersList-div2">
                    <span> {item.names} </span>
                    <EncountersListViewButton
                        encounterId={item.id}
                        encounterName={item.names}
                    />
                </div>
            );
        });

        return (
            <>
                <div className="encountersList-input">
                    <button
                        className="encountersList-clear"
                        onClick={() => this.handleClearSearch()}
                    >
                        X
                    </button>
                    <input
                        type="text"
                        placeholder="Search Encounters"
                        ref={input => (this.userSearch = input)}
                        onChange={event =>
                            this.handleEncounterSearchChange(event.target.value)
                        }
                    />
                    <div className="encountersList-div1">{displayEncounters}</div>
                </div>
            </>
        );
    }
}
