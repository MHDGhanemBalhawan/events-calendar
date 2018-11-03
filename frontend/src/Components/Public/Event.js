import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return (
        <span>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <div>Date: {moment(props.date).format("Do MMMM  YYYY")}</div>
            <div>Floaters: {props.floaters}</div>
            <button
                type="button"
                className="btn btn-outline-primary mr-4 mb-2 mt-4"
            >
                volunteer
            </button>
        </span>
    );
};

export default Event;
