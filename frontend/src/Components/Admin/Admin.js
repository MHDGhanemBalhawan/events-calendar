import React from "react";
import "../../Style/MainPage.css"


const admin = () => (
    <div className="container">
        <div className="row justify-content-md-center title">
            <div className="col-md-auto">
                <h1 className="mb-3 mt-5">Admin</h1>
            </div>
        </div>
        <ul className="nav flex-column">
            <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                <h2> <a href="/admin/floaters">Floaters</a></h2>
            </li>
            <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                <h2> <a href="/admin/events">Events</a></h2>
            </li>
        </ul>
    </div>
);

export default admin;
