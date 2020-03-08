import React from "react";

const DungeonContext = React.createContext({
    encountersArray: [],
    createdEncounter: [],
    createdMonsterList: [],
    selectedEncounter: [],
    handleUpdateEncountersArray: () => {},
    handleCreatedEncounter: () => {},
    handlleUpdateCreatedMonsterList: () => {},
    handleUpdateSelectedEncounter: () => {}
});

export default DungeonContext;
