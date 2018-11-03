import React from "react";
import Event from "./Event.js";
import "../../Style/Event.css";

const Events = props => {
    return (
        <div className="events">
            <h1 className="event_titles">Events</h1>
            {props.events.map(function(event, i) {
                return (
                    <div className="event">
                        <Event
                            key={i}
                            name={event.lesson}
                            description={event.description}
                            date={event.date}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Events;
