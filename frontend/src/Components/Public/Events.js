import React from "react";
import Event from "./Event.js";
import "../../Style/Event.css";
import NavBar from "../NavBar";
import "../../Style/Events.css";

const Events = props => {
    return (
        <div className="events">
            <NavBar>
                <h1 className="myHeader ml-5 ">Events</h1>
            </NavBar>
            {props.events.map(function(event, i) {
                return (
                    <Event
                        key={i}
                        event_id={event.event_id}
                        lesson={event.lesson}
                        event={event}
                        date={event.date}
                    />
                );
            })}
        </div>
    );
};

export default Events;
