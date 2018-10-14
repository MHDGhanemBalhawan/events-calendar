import React from "react";
// import { testData } from "../TestData.js";
import { Event } from "./Event.js";

const Events = props => {
    return (
        <div className="events">
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

export { Events };
