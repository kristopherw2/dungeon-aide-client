import React from "react";
import ReactDOM from "react-dom";
import EncountersListViewButton from "./EncountersListViewButton";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <EncountersListViewButton />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
