import React, { Component } from "react";
import '../MonsterCreatedList/MonsterCreatedList.css'
import '../../../Context/DungeonContext'

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

            
        }
    }

    render() {
        const displayCreatedMonsters = this.props.updateMonsters;
        const mapCreatedMonsters = displayCreatedMonsters.map((item, index) => {
            return (
                <div>
                <ul>
                    <li key={index+=1}>
                        <b>Name: </b>
                        {item.name}
                    </li>
                    <li key={index+=1}>
                        <b>Health: </b>
                        {item.health}
                    </li>
                    <li key={index+=1}>
                        <b>Armor: </b>
                        {item.armor_class}
                    </li>
                    <li key={index+=1}>
                        <b>Status: </b>
                        {item.status_effects}
                    </li>
                    <li><button onClick={() => this.props.deleteMonsters(item.id)}>Delete</button></li>
                </ul>
                </div>
            );
        }).reverse();
        return <div className="monsterCreatedList-div1">{mapCreatedMonsters}</div>;
    }
}

export default MonsterCreatedList;
