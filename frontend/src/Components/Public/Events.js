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
                        <a
                            className="btn btn-link mr-4 mb-2 mt-4"
                            href={`/event/${event.event_id}`}
                            alt={event.lesson}
                        >
                            Read more
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Events;
