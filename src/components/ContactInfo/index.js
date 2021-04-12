import React from "react";
import "../../App.css";

function ContactInfo () {
    return (
        <div className="card mt-3" >
         <h3 className="text-info font-weight-bold p-3 border-bottom border-info">
          Contact:
        </h3>
        <ul>
        <li> <a href = "mailto:borley1@gmail.com">borley1@gmail.com</a></li>
        <li> <a href= "https://www.linkedin.com/in/samantha-funk-99346b157">https://www.linkedin.com/in/samantha-funk-99346b157</a></li>
        <li> <a href= "https://www.github.com/sfunk11">https://www.github.com/sfunk11</a> </li>
        <li> <a href = "https://docs.google.com/document/d/1F8nBK59hYYfiJz0Bc-sjHJi0fGoa6uYg-Nq2zgmiK6M"> Resume</a></li>
        
    </ul>
    </div>
    )
}

export default ContactInfo;