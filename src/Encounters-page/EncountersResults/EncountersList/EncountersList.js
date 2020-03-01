import React, { Component } from "react";
import '../EncountersList/EncountersList.css'
import EncountersListDeleteButton from "./EncountersListDeleteButton/EncountersListViewButton";
import DungeonContext from "../../../Context/DungeonContext";
import EncountersListViewButton from "./EncountersListViewButton/EncountersListViewButton";

export default class EncountersList extends Component {
    
  static contextType = DungeonContext;

  render(){
    console.log(this.context.encountersArray)
    const displayEncounters = this.context.encountersArray.map(item =>  {
        return (
            <div className='encountersList-div'>
                <p>Name: {item.names}</p>
                <EncountersListViewButton encounterId={item.id} />
                <EncountersListDeleteButton encounterId={item.id} />
            </div>
        );
    });

    return <>{displayEncounters}</>;
  }
}
