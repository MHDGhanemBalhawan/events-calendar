import React from "react";
import "../../Style/MainPage.css";
import NavBar from "../NavBar";

const admin = () => (
    <div className="container">
        <NavBar>
            <h1 className="myHeader ml-5 ">Admin</h1>
        </NavBar>
        <div>
            <ul className="nav flex-column">
                <h2>
                    {" "}
                    <a href="/admin/floaters">
                        <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                            Floaters
                        </li>
                    </a>
                </h2>

                <h2>
                    {" "}
                    <a href="/admin/events">
                        <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                            Events
                        </li>
                    </a>
                </h2>
            </ul>
        </div>
    </div>
);

export default admin;
