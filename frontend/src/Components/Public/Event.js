import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return (
        <span>
            <h4 className=" float-left ">
                {moment(props.date).format("Do MMMM  YYYY")}
            </h4>
            <div className=" float-right">TicketMaster offices</div>
            <h1 className=" font-italic text-center">{props.name}</h1>
            <p>{props.description}</p>
        </span>
    );
};

export default Event;
