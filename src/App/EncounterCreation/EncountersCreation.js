import React, { Component } from "react";
import "../EncounterCreation/EncountersCreation.css";
import EncountersCreationForm from "./EncountersCreationForm/EncountersCreationForm";
import HeroImage from "../../Landing-Page/Hero Image/HeroImage";
import MonsterCreationForm from "./MonsterCreationForm/MonsterCreationForm";
import DungeonContext from "../../Context/DungeonContext";
// import MonsterCreatedList from "./MonsterCreatedList/MonsterCreatedList";

class EncountersCreation extends Component {
    state = {
        showMonsterCreationForm: false
    };

    componentDidMount() {
        if (localStorage.getItem("current-encounter")) {
            this.setState({
                showMonsterCreationForm: true
            });
        }
    }

    handleFormSwitch = click => {
        this.setState({
            showMonsterCreationForm: !this.state.showMonsterCreationForm
        });
    };

    static contextType = DungeonContext;

    render() {
        const switchMonsterEncounterForm =
            this.state.showMonsterCreationForm === false ? (
                <EncountersCreationForm
                    handleSwitch={() => this.handleFormSwitch()}
                />
            ) : (
                <>
                    <MonsterCreationForm />
                    {/* <MonsterCreatedList /> */}
                </>
            );
        return (
            <>
                <HeroImage />
                {switchMonsterEncounterForm}
            </>
        );
    }
}

export default EncountersCreation;
