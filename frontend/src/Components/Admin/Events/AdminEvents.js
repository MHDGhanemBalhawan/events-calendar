import React from "react";
import Popup from "reactjs-popup";
import Form from "./AdminForm";
import "../../../Style/Event.css";
import NavBar from "../../NavBar";
import AdminEvent from "./AdminEvent.js";

const Adminevents = props => {
    return (
        <div className="events">
            <NavBar>
                <h1 className="myHeader ml-5 ">Events</h1>
                <Popup
                    trigger={
                        <button className="btn btn-outline-primary mb-2 ml-2 sideButton mr-5 ">
                            add a new event
                        </button>
                    }
                    position="right center"
                    modal
                >
                    <Form />
                </Popup>
                <a href="/admin">
                    <button className="btn btn-outline-primary ml-2 mb-2 sideButton">
                        Back
                    </button>
                </a>
            </NavBar>
            {props.events.map(function(event, i) {
                return (
                    <div className="event" key={i}>
                        <AdminEvent
                            key={i}
                            lesson={event.lesson}
                            description={event.description}
                            date={event.date}
                            event_id={event.event_id}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Adminevents;
