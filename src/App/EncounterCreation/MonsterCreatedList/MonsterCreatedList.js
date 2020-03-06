import React, { Component } from "react";
import MonsterCreationForm from "../MonsterCreationForm/MonsterCreationForm";

class MonsterCreatedList extends Component {
    state = {
        currentEncounter: "",
        currentMonsters: []
    };

    componentDidMount() {
        if (localStorage.getItem("current-encounter")) {
            const stringEncounter = localStorage.getItem("current-encounter");
            const toJsonEncounter = JSON.parse(stringEncounter);
            const toObjectEncounter = toJsonEncounter[0];
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

    render() {
        const displayCreatedMonsters = this.state.currentMonsters;
        const mapCreatedMonsters = displayCreatedMonsters.map((item, index) => {
            return (
                <ul>
                    <li key={index-item.name}>
                        <b>Name: </b>
                        {item.name}
                    </li>
                    <li key={index-item.health}>
                        <b>Health: </b>
                        {item.health}
                    </li>
                    <li key={index-item.armor_class}>
                        <b>Armor: </b>
                        {item.armor_class}
                    </li>
                    <li key={index-item.status_effects}>
                        <b>Status: </b>
                        {item.status_effects}
                    </li>
                </ul>
            );
        });
        return <ul>{mapCreatedMonsters}</ul>;
    }
}

export default MonsterCreatedList;
