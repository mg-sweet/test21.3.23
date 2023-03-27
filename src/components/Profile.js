import React from "react";

function Profile(props) {
    return (
        <div className="container">
            <img className="user-img" src={props.image} alt=""></img>
            <nav className="user-info">
                <p>Name:</p>
                <p>{props.name}</p>
            </nav>
            <nav className="user-info">
                <p>Roll-No:</p>
                <p>{props.roll_no}</p>
            </nav>
        </div>
    )
}

export default Profile;