import React, { useImperativeHandle } from "react";

const DungeonContext = React.createContext({
    encountersArray: [],
    handleUpdateEncountersArray: () => {}
});

export default DungeonContext;
