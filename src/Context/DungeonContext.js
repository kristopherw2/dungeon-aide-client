import React from "react";

const DungeonContext = React.createContext({
    encountersArray: [],
    createdEncounter: [],
    handleUpdateEncountersArray: () => {},
    handleCreatedEncounter: () => {}
});

export default DungeonContext;
