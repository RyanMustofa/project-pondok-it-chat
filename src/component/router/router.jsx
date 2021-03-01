import React from "react";
import { Link } from "react-router-dom";

const Router = ({ search,showSearch,hideSearch }) => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <div className="container">
                        <a href="#!" class="brand-logo">
                            Logo
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <Link onClick={ search ? hideSearch : showSearch }>
                                    <i className="material-icons">search</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Router;
