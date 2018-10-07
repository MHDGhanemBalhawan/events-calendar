import React from "react";
import  '../Style/Event.css';
import '../Style/Events.css';

const Event = props => {
  return (
    <div className="event">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div>{props.date}</div>
    </div>
  );
};

export {Event};