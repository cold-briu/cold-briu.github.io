import React, { Component } from 'react';
import './CardStyles.css';
class Card extends Component {

    render() {
        return (
            <div className="col col-lg-3 col-md-3 p-1">

                <span className="badge badge-light">
                    <div className="badge-container" >
                        <i className={this.props.icon}></i>
                        <p className="badge-title"> {this.props.name} </p>
                    </div>

                </span>

            </div >
        );
    }
}

export default Card;