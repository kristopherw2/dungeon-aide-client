import React from "react";
import ReactDOM from "react-dom";
import EncountersList from "./EncountersList";
import { BrowserRouter } from "react-router-dom";
import CreateEncounter from "../../CreateEncounter/CreateEncounter";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <EncountersList />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
