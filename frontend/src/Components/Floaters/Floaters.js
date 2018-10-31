import React from "react";
import Floater from "./Floater.js";
import "../../Style/Event.css";

export default class Floaters extends React.Component{
    state = {
        mentors: [{
            floater_id: 3,
            floater_fname: "Nadine",
            floater_surname: "Dodo",
            floater_email: "nadine@hotmail.com"
        }]
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
                     <div className="events">
                         <h1 className="event_titles">Floaters</h1>
                         {this.state.mentors.map(function(floater, i) {
                             return (
                                 <div className="event">
                                     <Floater
                                         key={i}
                                         name={floater.floater_fname}
                                         description={floater.surname}
                                         email={floater.floater_email}
                                     />
                                 </div>
                             );
                         })}
                     </div>
                 );
             }
};


