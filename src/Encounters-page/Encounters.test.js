import React from "react";
import ReactDOM from "react-dom";
import Encounters from "./Encounters";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Encounters />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
