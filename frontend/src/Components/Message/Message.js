import React from "react";

const Message = props => {
    if (props.show) {
        return (
            <div className={`alert alert-${props.status}`} role="alert">
                {props.message}
            </div>
        );
    } else {
        return "";
    }
};

export default Message;
