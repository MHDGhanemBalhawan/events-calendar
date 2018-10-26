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
    // componentDidMount() {
    //     this.allFloaters();
    // }

    onSubmit = event => {
        event.preventDefault();
        const body = {
            firstName: this.firstNameRef.current.value,
            surname: this.surnameRef.current.value,
            email: this.emailRef.current.value
        };
        fetch("/mentors", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(this.allFloaters())
            .catch(error => console.error(error));
    };
    allFloaters = () => {
        fetch("/mentors", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "GET"
        })
            .then(res => res.json())
            .then(data => this.setState({ mentors: data }))
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-6">
                        {this.state.mentors.map(m => {
                            return (
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {m.firstName}
                                        </h5>
                                        <h5 className="card-title">
                                            {m.surname}
                                        </h5>
                                        <h5 className="card-title">
                                            {m.email}
                                        </h5>

                                        <a href="#" className="btn btn-primary">
                                            Edit
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
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
