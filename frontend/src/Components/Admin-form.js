import React from "react";
import { history } from "react-router-dom";
export default class Form extends React.Component {
    state = {
        lesson: "",
        event_date: "",
        description: ""
    };
    constructor(props) {
        super(props);
        this.lessonRef = React.createRef();
        this.event_dateRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    onSubmit = event => {
        event.preventDefault();
        const body = {
            lesson: this.lessonRef.current.value,
            event_date: this.event_dateRef.current.value,
            description: this.descriptionRef.current.value
        };
        fetch("/events", {
            method: "POST",
            body
        });
        this.props.history.push("/events");
        console.log(body);
    };

    render() {
        return (
            <div>
                <br />
                <h1 className="text-center">Admin</h1>
                <form>
                    <div className="form-group">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <br />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="event name"
                                    >
                                        Event Name
                                    </label>

                                    <input
                                        className="input form-control form-control-lg"
                                        placeholder="Events name"
                                        ref={this.lessonRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="event date"
                                    >
                                        Events Date
                                    </label>
                                    <input
                                        className="input form-control form-control-lg"
                                        placeholder="Event date"
                                        ref={this.event_dateRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="event description"
                                    >
                                        Events Description
                                    </label>
                                    <textarea
                                        className="textarea form-control form-control-lg"
                                        placeholder="Description"
                                        ref={this.descriptionRef}
                                        rows="8"
                                    />
                                    <br />
                                    <button
                                        className="btn btn-primary"
                                        onClick={e => this.onSubmit(e)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
