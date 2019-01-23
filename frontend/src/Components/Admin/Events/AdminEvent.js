import React from "react";
import moment from "moment";
import "../../../Style/Event.css";
import "../../../Style/Events.css";
import Popup from "reactjs-popup";
// import VolunteerForm from "../Admin/Floaters/FloaterToVolunteer";
import FloatersOfEvents from "../Floaters/FloatersOfEvent.js";
import EditForm from "./EditEvent.js";

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
                <div className=" ">London</div>
                <small>
                    <a
                        className=" btn-link "
                        href={`/event/${props.event_id}`}
                        alt={props.lesson}
                    >
                        class details and address
                    </a>
                </small>
                {/* <div className=" ">
                <Popup trigger={<button type="button" className="btn btn-primary mt-4">
                    Volunteer
                            </button>} position="right center" modal>
                    <VolunteerForm event_id={props.event_id} />
                </Popup>
            </div> */}
            </div>

            <div className="grid-item ">
                <p className="mr-4 mt-2">
                    <strong>{5}</strong> more volunteers needed
                </p>
            </div>
            <div className="grid-item ">
                <FloatersOfEvents id={props.event_id} />
            </div>
            <div className="grid-item ">
                <Popup
                    trigger={
                        <button
                            type="button"
                            className="btn btn btn-warning mr-4 mb-2 mt-4"
                        >
                            Edit
                        </button>
                    }
                    position="right center"
                    modal
                >
                    <EditForm
                        name={props.name}
                        lesson={props.lesson}
                        event_date={props.date}
                        description={props.description}
                        id={props.event_id}
                    />
                </Popup>
                {/* <button
                            className="btn btn-danger  mr-4 mb-2 mt-4"
                            onClick={function() {
                                props.deleteEvent(event.event_id);
                            }}
                        >
                            Delete
                        </button> */}
            </div>

            {/* <p>{props.description}</p> */}
        </span>
    );
};

export default AdminEvent;
