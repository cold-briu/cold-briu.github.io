import React, { Component } from 'react';

const ResumeCard = (props) => {
    return (

        <li>
            <div className="content-text">
                <h5 className="line-title">{props.header}</h5>
                <a href={props.link} target="blank">

                    <h6>{props.sub}</h6>
                </a>
                <p>{props.time}</p>
                <p className="line-text">

                </p>
            </div>
        </li>
    )
}
export default ResumeCard