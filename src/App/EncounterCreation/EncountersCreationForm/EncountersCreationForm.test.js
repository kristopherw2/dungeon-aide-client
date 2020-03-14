import React from "react";
import ReactDOM from "react-dom";
import EncountersCreationForm from "./EncountersCreationForm";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <EncountersCreationForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
