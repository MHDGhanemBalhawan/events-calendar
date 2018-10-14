import React, { Component } from "react";
import "./Style/App.css";
import { Events } from "./Components/Events.js";
import Form from "./Components/form.js";

class App extends Component {
    state = { events: [] };

    componentDidMount() {
        fetch("http://localhost:3001/events")
            .then(res => res.json())
            .then(data => {
                this.setState({ events: data });
            });
    }

    render() {
        return (
            <div>
                <Events events={this.state.events} />
                <Form />
            </div>
        );
    }
}

export default App;
