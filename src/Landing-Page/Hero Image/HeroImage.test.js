import React from "react";
import ReactDOM from "react-dom";
import HeroImage from "./HeroImage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <HeroImage />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
