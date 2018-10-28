import React from "react";

export default class FloaterForm extends React.Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.surnameRef = React.createRef();
        this.emailRef = React.createRef();
        this.state = {
            mentors: []
        };
    }

    onSubmit = event => {
        event.preventDefault();
        const body = {
            floater_fname: this.firstNameRef.current.value,
            floater_surname: this.surnameRef.current.value,
            floater_email: this.emailRef.current.value
        };
        fetch("/mentors", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="container mt-2">
                <h1 className="text-center mb-3">Add Floaters</h1>
                <form>
                    <div className="form-group">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="first name"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        className="input form-control form-control-lg"
                                        placeholder="First name"
                                        ref={this.firstNameRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="surname"
                                    >
                                        Surname
                                    </label>
                                    <input
                                        className="input form-control form-control-lg"
                                        placeholder="Surname"
                                        ref={this.surnameRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="input form-control form-control-lg"
                                        placeholder="email"
                                        ref={this.emailRef}
                                    />
                                    <br />
                                    <div
                                        className="btn-toolbar justify-content-between"
                                        role="toolbar"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            onClick={e => this.onSubmit(e)}
                                        >
                                            Submit
                                        </button>
                                        <a
                                            className="btn btn-primary "
                                            href="/admin"
                                        >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
