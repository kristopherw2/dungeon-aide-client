import React from "react";
import ReactDOM from "react-dom";
import EncountersCreation from "../EncounterCreation/EncountersCreation";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <EncountersCreation />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
