// Functional react component

import React from "react";

import AppNavBar from "../common/app-nav-bar";

function HomePage() {
    return (
        <React.Fragment>
            <AppNavBar/>
            <div className="p-5 mb-4 bg-light rounded-3 container-fluid">
                <h1>React</h1>
                <h4>A JavaScript library for building user interfaces   </h4>
            </div>
        </React.Fragment>

    );
}

export default HomePage;