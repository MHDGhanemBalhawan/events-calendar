import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";
import Popup from "reactjs-popup";
import VolunteerForm from "../Admin/Floaters/FloaterToVolunteer";

const Event = ({ event }) => {
    return (
        <span className="event-grid-container">
            <div className="grid-item">
                <h4 className="  pt-5 ml-4">
                    {moment(event.date).format("Do MMMM  YYYY")}
                </h4>
            </div>
            <div className="grid-item">
                <h1 className="font-weight-bold">{event.lesson}</h1>
                <div className=" ">London, TicketMaster offices</div>
                <a
                    className="btn btn-link"
                    href={`/event/${event.event_id}`}
                    alt={event.lesson}
                >
                    class details and address
                </a>
                <div className=" ">
                    <Popup
                        trigger={
                            <button
                                type="button"
                                className="btn btn-primary mt-4"
                            >
                                Volunteer
                            </button>
                        }
                        position="right center"
                        modal
                    >
                        <VolunteerForm event_id={event.event_id} />
                    </Popup>
                </div>
            </div>

            <div className="grid-item ">
                <p className="pt-5 mr-4">{5} more volunteers needed</p>
            </div>

            {/* <p>{event.description}</p> */}
        </span>
    );
};

export default Event;
