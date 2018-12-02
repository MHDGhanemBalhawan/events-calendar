import React from "react";
import "../../Style/MainPage.css";

const admin = () => (
    <div className="container">
        <div className="dummyDiv" />
        <div className="fixed-top card headerEvents  mt=0 pt-3 pb-3">
            <h1 className="myHeader ml-5 ">Admin</h1>
        </div>
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
