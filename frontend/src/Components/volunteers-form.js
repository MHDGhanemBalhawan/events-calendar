import React from "react";
//write function that takes event.target (the form) and returns json
const formToJson = form => {
    const data = new FormData(form).entries();
    const json = Object.assign(...Array.from(data, ([x, y]) => ({ [x]: y })));
    return json;
};

export default class VolunteerForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const json = formToJson(event.target);

        fetch("http://localhost:3001/addingFloaters", {
            method: "POST",
            body: json
        }).then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label className="font-weight-bold" htmlFor="firstname">
                    Enter Your First Name{" "}
                </label>
                <input
                    className="input form-control"
                    id="username"
                    name="firstname"
                    type="text"
                />

                <br />
                <label className="font-weight-bold" htmlFor="surname">
                    Enter Your Surname{" "}
                </label>
                <input
                    className="input form-control"
                    id="surname"
                    name="surname"
                    type="text"
                />

                <br />
                <label className="font-weight-bold" htmlFor="email">
                    Enter Your Email{" "}
                </label>
                <input
                    className="input form-control"
                    id="email"
                    name="email"
                    type="email"
                />

                <br />
                <button className="button4">Yes Volunteer!</button>
            </form>
        );
    }
}
