import React from "react";
import "../../Style/Event.css";

export default class Floaters extends React.Component {
    state = {
        mentors: [
            {
                floater_id: 3,
                floater_fname: "Nadine",
                floater_surname: "Dodo",
                floater_email: "nadine@hotmail.com"
            }
        ]
    };

    componentDidMount() {
        fetch("/mentors")
            .then(res => res.json())
            .then(data1 => {
                this.setState({ mentors: data1 });
            });
    }

    render() {
        return (
            <div className="container mt-2">
                <div className=" mb-4 mt-4">
                    <h className="h3 mb-4">Code Your Future Floaters</h>
                </div>
                <table className="table table-striped table-hover ">
                    <tbody>
                        <tr>
                            <th scope="col">Floater id</th>
                            <th scope="col">First Name </th>
                            <th scope="col">Surname </th>
                            <th scope="col">Email</th>
                        </tr>
                        {this.state.mentors.map(function(floater) {
                            return (
                                <tr key={floater.floater_id}>
                                    <th scope="row">{floater.floater_id}</th>
                                    <td>{floater.floater_fname}</td>
                                    <td>{floater.floater_surname}</td>
                                    <td>{floater.floater_email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <button className="btn btn-outline-primary mr-4 mb-2 mt-4">
                    <a href="/admin">Back</a>
                </button>
                <button className="btn btn-outline-primary mr-4 mb-2 mt-4">
                    <a href="/admin/floaters/add">Add Floaters</a>
                </button>
            </div>
        );
    }
}
