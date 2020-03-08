import React, { Component } from "react";
import "./ViewEncounter.css";
import DungeonContext from "../../Context/DungeonContext";

class ViewEncounter extends Component {
    static contextType = DungeonContext;

    componentDidMount() {
        if (localStorage.getItem("current-monsters")) {
            const stringEncounter = localStorage.getItem("current-monsters");
            const toJsonEncounter = JSON.parse(stringEncounter);
            this.context.handleUpdateSelectedEncounter(toJsonEncounter)
        }
    }
    render() {
        const displayMonstersFromEncounter = this.context.selectedEncounter.map(item => {
            return  item.id
        })
    return <div>{displayMonstersFromEncounter}</div>;
    }
}

export default ViewEncounter;
