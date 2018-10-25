import React from "react";
import "../Style/Event.css";
import "../Style/Events.css";
import Popup from "reactjs-popup";
import MyForm from "./MyForm";

const Event = props => {
    return <span>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <div>Date: {props.date}</div>
            <div>Floaters: {props.floaters}</div>
        <Popup trigger={<button type="button" className="btn btn-outline-primary mr-4 mb-2">
                        volunteer
                    </button>} position="right center" modal>
                <MyForm/>
            </Popup>
        </span>;
};

export default Event;
