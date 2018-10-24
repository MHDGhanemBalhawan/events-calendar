import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Events.js";
import Event from "./Components/Event.js";
import Form from "./Components/Admin-form.js";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    state = { events: [] };

    componentDidMount() {
        fetch("/api/v1/events")
            .then(res => res.json())
            .then(data => {
                this.setState({ events: data });
            });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/events"
                            render={() => <Events events={this.state.events} />}
                        />

                        <Route path="/event/:id" component={Events} />
                        <Route path="/admin" component={Form} />
                        <Route path="/admin/event" />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
