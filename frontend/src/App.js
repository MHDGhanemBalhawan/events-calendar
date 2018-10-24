import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Events.js";
import Event from "./Components/Event.js";
import Form from "./Components/Admin/Admin-form.js";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./Components/Admin/admin.js";
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
                        <Route exact path="/admin" component={Admin} />
                        <Route path="/admin/events/add" component={Form} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
