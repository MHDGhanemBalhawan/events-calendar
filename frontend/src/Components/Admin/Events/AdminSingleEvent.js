import React from "react";
// import Event from "./Event";
// import FloatersOfEvents from "../Admin/Floaters/FloatersOfEvent.js";
import NavBar from "../../NavBar";
import moment from "moment";
import Popup from "reactjs-popup";
import FloatersOfEvents from "../Floaters/FloatersOfEvent.js";
import EditForm from "./EditEvent.js";

export default class SingleEvent extends React.Component {
    state = {
        event: []
    };
    componentDidMount() {
        fetch(`/events/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ event: data });
            });
    }

    render() {
        return (
            <div className="events mt-2">
                <NavBar>
                    <h1 className="myHeader ml-5"> Events</h1>
                    <a href="/admin/events">
                        <button className="btn btn-outline-primary mb-2 ml-2 sideButton mr-5 ">
                            Back to All Events
                        </button>
                    </a>
                </NavBar>

                <span className="event-grid-container">
                    <div className="grid-item">
                        <h4 className="mt-2">
                            {moment(this.state.event.date).format(
                                "Do MMMM  YYYY"
                            )}
                        </h4>
                    </div>
                    <div className="grid-item">
                        <h1 className="font-weight-bold">
                            {this.state.event.lesson}
                        </h1>

                        
                    </div>
                    <div className="grid-item ">
                        <p className="mt-2">
                            <strong>{5}</strong> more volunteers needed
                        </p>
                    </div>
                    <div className="grid-item ">
                        <p className="a-address ">
                            <a href="">
                                London
                                <br />
                                ticket Master
                                <br />
                                55 Road Road
                            </a>
                        </p>
                    </div>

                    <div className="grid-item text-left">
                        <p>
                            {this.state.event.description}
                            <br />
                            <a href="">For Syllabus Click here</a>
                        </p>
                    </div>
                    <div className="grid-item">
                        <FloatersOfEvents id={this.props.match.params.id} />
                    </div>
                    <div className="grid-item"> <button
                        className="btn btn-danger  mr-4 mb-2 mt-4"
                        // onClick={function () {
                        //     props.deleteEvent(event.event_id);
                        // }}
                    >
                        Delete
                        </button></div>
                    <div className="grid-item">
                        {" "}
                        <div className="grid-item">
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
                                    name={this.state.event.name}
                                    lesson={this.state.event.lesson}
                                    event_date={this.state.event.date}
                                    description={this.state.event.description}
                                    id={this.state.event.event_id}
                                />
                            </Popup>

                            
                        </div>
                    </div>
                    <div className="grid-item ">
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
                            {/* <VolunteerForm event_id={props.event_id} /> to show volunteers name if needed again*/}
                        </Popup>
                    </div>
                </span>
            </div>
        );
    }
}
