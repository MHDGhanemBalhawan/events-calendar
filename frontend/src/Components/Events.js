import React from "react";
import Event from "./Event.js";

const Events = props => {
    return (
        <div className="events">
            <h1> All Events</h1>
            {props.events.map(function(event, i) {
                return (
                    <Event
                        key={i}
                        name={event.lesson}
                        description={event.description}
                        date={event.date}
                    />
                );
            })}
        </div>
    );
};

export default Events;
