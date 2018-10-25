import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Events.js";
import Event from "./Components/Event.js";
import Form from "./Components/Admin-form.js";
import { BrowserRouter, Route } from "react-router-dom";
import Adminevents from "./Components/Admin_events.js";

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
                        <Route path="/event/eventname" component={Event} />
                        <Route path="/admin" component={Form} />
                        <Route
                            exact
                            path="/adminevents"
                            render={() => (
                                <Adminevents events={this.state.events} />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
