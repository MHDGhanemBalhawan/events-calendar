import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return (
        <span>
            <h1>{props.name}</h1>
            <h1>{props.description}</h1>
            <div>{moment(props.date).format("Do MMMM  YYYY")}</div>
            <div>Location: 4 Pentonville Rd, London N1 9HF</div>
        </span>
    );
};

export default Event;
