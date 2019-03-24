import React from "react";
import "../../Style/MainPage.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
const mainPage = () => (
    <div>
        <div className="container">
            <NavBar>
                <h1 className="myHeader ml-5">Events Calendar</h1>
            </NavBar>
            <div>
                <ul className="nav flex-column">
                    <h2>
                        <a href="/admin">
                            <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                                Admin
                            </li>
                        </a>
                    </h2>
                    <h2>
                        <a href="/events">
                            <li className="nav-item text-center shadow-lg p-3 mb-5  rounded">
                                Events
                            </li>
                        </a>
                    </h2>
                </ul>
            </div>
        </div>

        <Footer />
    </div>
);

export default mainPage;
