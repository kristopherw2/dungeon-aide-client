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
            encountersArray: []
        };
    }

    handleUpdateEncountersArray = encounters => {
        this.setState({
            encountersArray: [...encounters]
        });
    };

    render() {
        return (
            <DungeonContext.Provider
                value={{
                    encountersArray: this.state.encountersArray,
                    handleUpdateEncountersArray: this
                        .handleUpdateEncountersArray
                }}
            >
                <div>
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
                </div>
            </DungeonContext.Provider>
        );
    }
}
export default App;
