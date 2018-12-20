import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return <span>
        
        <h1 className="float-right">{props.name}</h1>
        <h1 >{moment(props.date).format("Do MMMM  YYYY")}</h1>
            <p>{props.description}</p>
            <div>Location: TicketMaster offices</div>
        </span>;
};

export default Event;
