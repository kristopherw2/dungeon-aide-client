import React, { Component } from "react";
import "./App.css"
import { Route, Switch } from "react-router-dom";
import LandingPage from "../Landing-Page/LandingPage";
import EncountersHomepage from "../Encounters-page/Encounters";
import EncountersCreation from "./EncounterCreation/EncountersCreation";
import ViewEncounter from "./ViewEncounter/ViewEncounter";
import DungeonContext from "../Context/DungeonContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encountersArray: [],
            createdEncounter: [],
            createdMonsterList: [],
            selectedEncounter: [],
            currentEncounterName: ""
        };
    }

    handleUpdateEncountersArray = encounters => {
        this.setState({
            encountersArray: [...encounters]
        });
    };

    handleCreatedEncounter = encounter => {
        this.setState({
            createdEncounter: [...encounter]
        });
    };

    handleUpdateCreatedMonsterList = monsters => {
        this.setState({
            createdMonsterList: [...monsters]
        });
    };

    handleUpdateSelectedEncounter = encounter => {
        this.setState({
            selectedEncounter: [...encounter]
        });
    };

    handleUpdateCurrentEncounterName = encounter => {
        this.setState({
            currentEncounterName: encounter
        });
    };

    render() {
        return (
            <DungeonContext.Provider
                value={{
                    encountersArray: this.state.encountersArray,
                    createdEncounter: this.state.createdEncounter,
                    createdMonsterList: this.state.createdMonsterList,
                    selectedEncounter: this.state.selectedEncounter,
                    currentEncounterName: this.state.currentEncounterName,
                    handleUpdateEncountersArray: this
                        .handleUpdateEncountersArray,
                    handleCreatedEncounter: this.handleCreatedEncounter,
                    handleUpdateCreatedMonsterList: this
                        .handleUpdateCreatedMonsterList,
                    handleUpdateSelectedEncounter: this
                        .handleUpdateSelectedEncounter,
                    handleUpdateCurrentEncounterName: this.handleUpdateCurrentEncounterName
                }}
            >
                <div className="app">
                    <Switch>
                        <Route exact path={"/"} component={LandingPage} />
                        <Route
                            exact
                            path={"/encounters"}
                            component={EncountersHomepage}
                        />
                        <Route
                            exact
                            path={"/encountercreate"}
                            component={EncountersCreation}
                        />
                        <Route
                            exact
                            path={"/viewencounter"}
                            component={ViewEncounter}
                        />
                    </Switch>
                </div>
            </DungeonContext.Provider>
        );
    }
}
export default App;
