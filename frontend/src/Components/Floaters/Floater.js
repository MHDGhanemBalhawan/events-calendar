import React from "react";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Floater = props => {
    return (
        <span>
            <h1>Floaters</h1>
            <p>First Name: {props.floater_fname}</p>
            <p>Surname: {props.floater_surname}</p>
            <p>Email: {props.floater_email}</p>
        </span>
    );
};

export default Floater;
