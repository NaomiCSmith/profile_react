// file: profile.jsx

// In a new React project, write a component Profile in a file Profile.jsx which returns the following HTML tree:

// <div id="profile">
//   <h1 id="name">Quackie Makers</h1>

//   <p id="job">Makers' favourite rubber duck</p>
//   <p id="birthdate">2013</p>
// </div>

// Insert this component in your App component tree (in App.jsx), and view the app in a web browser.

import React from "react";

const Profile = (props) => {
    return (
        <div className="profile">
            <h1 is="name">{props.name}</h1>
            <p id="job">{props.job}</p>
            <p id="birthdate">{props.birthdate}</p>
        </div>
    );
};

export default Profile;

