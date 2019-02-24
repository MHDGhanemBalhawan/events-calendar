import React from "react";

export default class FloatersOfEvents extends React.Component {
    state = { mentors: [] };

    // componentDidMount() {
    //     fetch("/events-floaters/event/" + this.props.id)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ mentors: data });
    //         });
    // }

    render() {
        return (
            <div>
                <table>
                    <tbody className="table table-borderless">
                        <td> Floaters: </td>
                        {this.state.mentors.map(floater => {
                            return (
                                <td key={floater.floaters_events_id}>
                                    {floater.floater_fname}
                                    {floater.floater_surname}
                                </td>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
