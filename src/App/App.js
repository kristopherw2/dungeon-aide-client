import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../Landing-Page/LandingPage";
import EncountersHomepage from "../Encounters-page/Encounters";
import EncountersCreation from "./EncounterCreation/EncountersCreation";
import DungeonContext from "../Context/DungeonContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encountersArray: [],
            createdEncounter: []
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

    render() {
        return (
            <DungeonContext.Provider
                value={{
                    encountersArray: this.state.encountersArray,
                    createdEncounter: this.state.createdEncounter,
                    handleUpdateEncountersArray: this
                        .handleUpdateEncountersArray,
                    handleCreatedEncounter: this.handleCreatedEncounter
                }}
            >
                <div>
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
                    </Switch>
                </div>
            </DungeonContext.Provider>
        );
    }
}
export default App;
