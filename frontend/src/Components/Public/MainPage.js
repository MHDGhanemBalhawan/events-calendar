import React from "react";
import "../../Style/MainPage.css"
const mainPage = () => (
    <div className="container">
        <div className="row justify-content-md-center title">
            <div className="col-md-auto">
                <h1 className="mb-3 mt-5">Events Calendar</h1>
            </div>
        </div>
        <div>
            <ul className="nav flex-column">
                    <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                        <h2>
                            <a href="/admin">Admin</a>
                        </h2>
                    </li>
                    <li className="nav-item text-center shadow-lg p-3 mb-5  rounded">
                        <h2>
                            <a href="/events">Events</a>
                        </h2>
                    </li>

            </ul>
        </div>
    </div>
);

export default mainPage;
