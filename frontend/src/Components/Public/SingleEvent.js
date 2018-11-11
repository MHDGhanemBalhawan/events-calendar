import React from "react";
import Event from "./Event";

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
            <div className="container mt-2">
                <div className="event">
                    <Event
                        name={this.state.event.lesson}
                        description={this.state.event.description}
                        date={this.state.event.date}
                    />
                </div>
            </div>
        );
    }
}
