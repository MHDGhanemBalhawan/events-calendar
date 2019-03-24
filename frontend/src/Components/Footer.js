import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="row">
                    <div className="col l6 offset-l2 s12">
                        <h5 className="white-text">Project Credential</h5>
                        <p className="grey-text text-lighten-4">
                            Code Your Future Project.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="col 6 s12">
                                <h5 className="white-text">Back-end Design</h5>
                                <ul>
                                    <a
                                        className="grey-text text-lighten-3"
                                        target="_blank"
                                        href="http://mhdghanembalhawan.com"
                                        rel="noopener noreferrer"
                                    >
                                        <li>
                                            <i className="fa fa-code" />
                                            Mohamad Balhawan
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="col 6 s12">
                            <h5 className="white-text">Front-end Design</h5>
                            <ul>
                                <a
                                    className="grey-text text-lighten-3"
                                    target="_blank"
                                    href="http://mhdghanembalhawan.com"
                                    rel="noopener noreferrer"
                                >
                                    <li>
                                        <i className="fa fa-code" />
                                        Mohamad Balhawan
                                    </li>
                                </a>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    <li>
                                        <i className="fa fa-code" />
                                        Behnaz Pourafshari
                                    </li>
                                </a>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="#!"
                                >
                                    <li>
                                        <i className="fa fa-code" />
                                        Daleel Hagy{" "}
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        {" "}
                        <i className="fa fa-copyright" />
                        Code Your Future. All rights reserved.
                    </div>
                </div>
            </footer>
        );
    }
}
