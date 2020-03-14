import React from "react";
import ReactDOM from "react-dom";
import ViewEncounter from "../ViewEncounter/ViewEncounter";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <ViewEncounter />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
