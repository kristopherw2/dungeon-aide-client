import React from "react";
import ReactDOM from "react-dom";
import Overview from "./overview";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Overview />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
