import React, { Component } from "react";
import "./ViewEncounter.css";
import DungeonContext from "../../Context/DungeonContext";

class ViewEncounter extends Component {
    static contextType = DungeonContext;

    componentDidMount() {
        if (localStorage.getItem("current-monsters")) {
        }
    }
    render() {
        return <p>Yes</p>;
    }
}

export default ViewEncounter;
