import React from "react";

const admin = () => (
    <div className="container mt-2">
        <h1 className="mb-3">Admin</h1>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a href="/admin/events/add">Add Events</a>
            </li>
            <li className="nav-item">
                <a href="/admin/floaters">See All Floaters</a>
            </li>
            <li className="nav-item">
                <a href="/admin/floaters/add">Add Floaters</a>
            </li>
            <li className="nav-item">
                <a href="/admin/events">Events</a>
            </li>
        </ul>
    </div>
);

export default admin;
