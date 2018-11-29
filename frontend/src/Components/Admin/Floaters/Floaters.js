import React from "react";
import "../../../Style/Event.css";
import Message from "../../Message/Message";
import Popup from "reactjs-popup";
import EditFloater from "./EditFloater.js";

export default class Floaters extends React.Component {
    state = {
        mentors: [],
        message: false
    };

    _getMentors = () => {
        fetch("/mentors")
            .then(res => res.json())
            .then(data => {
                this.setState({ mentors: data });
            });
    };

    componentDidMount() {
        this._getMentors();
    }

    _deleteFloater = id => {
        fetch("/mentors/" + id, { method: "delete" })
            .then(response => {
                this.setState({ message: true });
                this._getMentors();
            })
            .catch(error => console.error(error));
    };

    render() {
        return <div className="container mt-2">
                <Message show={this.state.message} status="success" message="New floater is deleted" />

                <div className=" mb-4 mt-4 sameRowBtn container">
                    <h1 className="h3 mb-4 myHeader">
                        Code Your Future Floaters
                    </h1>

                    <a href="/admin">
                        <button className="btn btn-outline-primary mr-4 mb-2 sideButton">
                            Back
                        </button>
                    </a>
                        <a href="/admin/floaters/add">
                            {" "}
                            <button className="btn btn-outline-primary mr-4 mb-2 sideButton">
                                Add Floaters
                            </button>
                        </a>
                </div>
                <table className="table table-striped table-dark">
                    <tbody>
                        <tr>
                            {/* <th scope="col">Floater id</th> */}
                            <th />
                            <th scope="col">First Name </th>
                            <th scope="col">Surname </th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                        {this.state.mentors.map(floater => {
                            return <tr key={floater.floater_id}>
                                    <td />
                                    <td>{floater.floater_fname}</td>
                                    <td>{floater.floater_surname}</td>
                                    <td>{floater.floater_email}</td>
                                    <td>
                                        <Popup trigger={<button type="button" className="btn btn-link text-warning linkEdit">
                                                    Edit
                                                </button>} position="right center" modal>
                                            <EditFloater floater_fname={floater.floater_fname} floater_surname={floater.floater_surname} floater_email={floater.floater_email} floater_id={floater.floater_id} />
                                        </Popup>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-link text-danger linkDelete" onClick={() => {
                                                this._deleteFloater(floater.floater_id);
                                            }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>;
                        })}
                    </tbody>
                </table>
            </div>;
    }
}
