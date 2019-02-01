import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return (
        <span>
            <h1 className=" text-center">{props.name}</h1>
            <div className=" text-center">TicketMaster offices</div>
            <h4 className=" font-italic float-right ">
                {moment(props.date).format("Do MMMM  YYYY")}
            </h4>
            <p>{props.description}</p>
        </span>
    );
};

export default Event;
