import React from "react";
import Event from "../Event.js";
import Popup from "reactjs-popup";
import Form from "./Admin-form";
import "../../Style/Event.css";
import EditForm from "./Edit_event.js";

const Adminevents = props => {
    return (
        <div className="events">
            <h1>Events</h1>
            <Popup
                trigger={
                    <button className="btn btn-outline-primary mb-2">
                        add a new event
                    </button>
                }
                position="right center"
                modal
            >
                <Form name={props.name} />
            </Popup>
            {props.events.map(function(event, i) {
                return (
                    <div className="event">
                        <Event
                            key={i}
                            name={event.lesson}
                            description={event.description}
                            date={event.date}
                            event_id={event.event_id}
                        />
                        <Popup
                            trigger={
                                <button className="btn btn-outline-primary mr-4 mb-2 mt-4">
                                    Edit
                                </button>
                            }
                            position="right center"
                            modal
                        >
                            <EditForm
                                name={props.name}
                                lesson={event.lesson}
                                event_date={event.date}
                                description={event.description}
                            />
                        </Popup>
                        <button
                            className="btn btn-outline-primary mr-4 mb-2 mt-4"
                            onClick={function() {
                                props.deleteEvent(event.event_id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Adminevents;
