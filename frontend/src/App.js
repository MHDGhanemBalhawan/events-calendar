import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Events.js";
import Form from "./Components/Admin/Admin-form.js";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin.js";
import AdminEvents from "./Components/Admin/Admin_events.js";
import FloaterForm from "./Components/Admin/Floaters/FloaterForm";
import mainPage from "./Components/MainPage";
import Floaters from "./Components/Admin/Floaters/Floaters.js";

class App extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        fetch("/events")
            .then(res => res.json())
            .then(data => {
                this.setState({ events: data });
            });
    }

    toDelete(id) {
        fetch("/events/" + id, {
            method: "delete"
        }).then(response => {
            if (response.status === 500) {
                alert("Error: Failed to delete event");
            } else {
                window.location.reload();
            }
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
                        <Route exact path="/" component={mainPage} />
                        <Route path="/event/:id" component={Events} />
                        <Route exact path="/admin" component={Admin} />
                        <Route path="/admin/events/add" component={Form} />
                        <Route
                            path="/admin/floaters/add"
                            component={FloaterForm}
                        />
                        <Route
                            exact
                            path="/admin/events"
                            render={() => (
                                <AdminEvents
                                    events={this.state.events}
                                    deleteEvent={this.toDelete}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/admin/floaters"
                            render={() => <Floaters />}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
