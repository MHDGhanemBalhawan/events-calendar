import React from "react";
import moment from "moment";
import "../../../Style/Event.css";
import "../../../Style/Events.css";
import Popup from "reactjs-popup";

const AdminEvent = props => {
    return (
        <span className="event-grid-container">
            <div className="grid-item">
                <h4 className="mt-2">
                    {moment(props.date).format("Do MMMM  YYYY")}
                </h4>
            </div>
            <div className="grid-item">
                <h1 className="font-weight-bold">{props.lesson}</h1>
                <div className=" ">UK, London</div>
                <small>
                    <a
                        className=" btn-link "
                        href={`/admin/event/${props.event_id}`}
                        alt={props.lesson}
                    >
                        See or Edit This Event
                    </a>
                </small>
                <div className=" ">
                    <Popup
                        trigger={
                            <button
                                type="button"
                                className="btn btn-primary mt-4"
                            >
                                Add Volunteers
                            </button>
                        }
                        position="right center"
                        modal
                    >
                        {/* <VolunteerForm event_id={props.event_id} /> */}
                    </Popup>
                </div>
            </div>

            <div className="grid-item ">
                <p className="mt-2">
                    <strong>{5}</strong> more volunteers needed
                </p>
            </div>
            <div className="grid-item "> </div>
            <div className="grid-item " />
            <div className="grid-item " />
        </span>
    );
};

export default AdminEvent;
