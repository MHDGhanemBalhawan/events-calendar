import React from "react";
const mainPage = () => (
    <div className="container mt-5">
        <h1 className="mb-3">CYF Events Calendar</h1>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a href="/admin">Admin</a>
            </li>
            <li className="nav-item">
                <a href="/events">Events</a>
            </li>
        </ul>
    </div>
);

export default mainPage;
