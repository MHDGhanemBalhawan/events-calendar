import React from "react";
// import { testData } from "../TestData.js";
import { Event } from "./Event.js";

const Events = props => {
    return (
        <div class="events">
            {fetch("http://localhost:3001/events")
                .then(res => res.json())
                .then(testData => {
                    testData.map(function(event) {
                        return (
                            <Event
                                name={event.lesson}
                                description={event.description}
                                date={event.date}
                            />
                        );
                    });
                })}
        </div>
    );
};

export { Events };
