import React from "react";
import Message from "../../Message/Message";

export default class VolunteerForm extends React.Component {
    state = { floaters: [], message: false };

    componentDidMount() {
        fetch("/mentors")
            .then(res => res.json())
            .then(data => {
                this.setState({ floaters: data });
            });
    }

    _addFloaterToEvent = floater_id => {
        fetch("/events-floaters", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event_id: this.props.event_id,
                floater_id: floater_id
            })
        })
            .then(res => res.json())
            .then(() => {
                this.setState({ message: true });
            })
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="container mt-2">
                <Message
                    show={this.state.message}
                    status="success"
                    message="Floater Has Been Added"
                />
                <ul className="container list-group mt-4 mb-4">
                    {this.state.floaters.map(floater => {
                        return (
                            <button
                                type="button"
                                className="list-group-item list-group-item-action"
                                onClick={() => {
                                    this._addFloaterToEvent(floater.floater_id);
                                }}
                            >
                                {floater.floater_fname}{" "}
                                {floater.floater_surname}
                            </button>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
