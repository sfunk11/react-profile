import React from "react";
import "./Header.css";

function Header (props) {

    return (
        <div className="header">
            <h1>{props.header}</h1>
        </div>
    )
}

export default Header;


