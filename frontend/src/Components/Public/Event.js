import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return (
        <span>
            <h4 className="float-right font-italic">
                {moment(props.date).format("Do MMMM  YYYY")}
            </h4>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div>Location: TicketMaster offices</div>
        </span>
    );
};

export default Event;
