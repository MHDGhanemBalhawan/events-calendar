import React from "react";

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
        console.log(floater_id + " " + this.props.event_id);
    };

    render() {
        return (
            <div className="container mt-2">
                <ul className="container list-group mt-4 mb-4">
                    {this.state.floaters.map(floater => {
                        return (
                            <button
                                type="button"
                                class="list-group-item list-group-item-action"
                                onClick={() => {
                                    this._addFloaterToEvent(floater.floater_id);
                                }}
                            >
                                {floater.floater_fname}{" "}
                                {floater.floater_surname}
                            </button>
                            // <li className="list-group-item list-group-item-action">{floater.floater_fname}{" "}{floater.floater_surname}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
