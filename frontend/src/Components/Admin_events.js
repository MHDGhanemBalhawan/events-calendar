import React from "react";
import Event from "./Event.js";
import Popup from "reactjs-popup";
import Form from "./Admin-form";
import "../Style/Event.css";


const Adminevents = props => {
    return <div className="events">
            <h1>Events</h1>
            <Popup trigger={<button className="btn btn-outline-primary mb-2">
                        add a new event
                    </button>} position="right center" modal>
                <Form name={props.name} />
            </Popup>
            {props.events.map(function(event, i) {
                return <div className="event">
                        <Event key={i} name={event.lesson} description={event.description} date={event.date} />
                    <button className="btn btn-outline-primary mr-4 mb-2">
                        Edit
                        </button>
                    <button className="btn btn-outline-primary mr-4 mb-2">
                        Delete
                        </button>
                    </div>;
            })}
        </div>;
};

export default Adminevents;
