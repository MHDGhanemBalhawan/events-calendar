import React from "react";
import { testData } from "../TestData.js";
import { Event } from "./Event.js";

const Events = props => {
    return (
        <div class="events">
            {testData.map(function(event) {
                return (
                    <Event
                        name={event.name}
                        description={event.description}
                        date={event.date}
                    />
                );
            })}
        </div>
    );
};

export { Events };
