// react Imports
import React from 'react';

// custom imports
import AppNavBar from '../../../common/app-nav-bar';
import { Hello, Welcome } from '../greet/greet';
import { Message } from '../message/message';

// Styles imports
import './greet-card.css';

export class GreetCard extends React.Component {

    // empty constructor is optional

    render() {
        return (
            <React.Fragment>
                <AppNavBar/>
                <div className="jumbotron">
                    <div className="greet-box">
                        <h1 style={{ color: "red", borderColor:"red" }}>Props Example: </h1>
                        <Hello name="Avinash"></Hello>
                        <Welcome course="React JS"></Welcome>
                    </div>

                    <div className="greet-box">
                        <h1 style={{ color: "green" }}>State Example: </h1>
                        <Message></Message>
                    </div>

                </div>
            </React.Fragment>
        )
    }
};

export default GreetCard;