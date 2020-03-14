import React from "react";
import ReactDOM from "react-dom";
import CreateEncounter from "./CreateEncounter";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <CreateEncounter />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
