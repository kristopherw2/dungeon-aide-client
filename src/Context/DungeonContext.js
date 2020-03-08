import React from "react";

const DungeonContext = React.createContext({
    encountersArray: [],
    createdEncounter: [],
    createdMonsterList: [],
    selectedEncounter: [],
    currentEncounterName: "",
    handleUpdateEncountersArray: () => {},
    handleCreatedEncounter: () => {},
    handlleUpdateCreatedMonsterList: () => {},
    handleUpdateSelectedEncounter: () => {},
    handleUpdateCurrentEncounterName: () => {}
});

export default DungeonContext;
