import React from "react";
import { Component } from "react";
import "./overview.css";
import { withRouter } from "react-router-dom";

class Overview extends Component {
    
    handleRouteToEncounters = () => {this.props.history.push('/encounters')};

    render() {
        return (
            <div className="overview">
                <p>
                    If you're ready to contribute to the community click the
                    button below!
                </p>
                <button onClick={() => this.handleRouteToEncounters()}>Check it out</button>
            </div>
        );
    }
}

export default withRouter(Overview);
