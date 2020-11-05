import React from "react";

export default function FriendCard(props) {
    console.log("Friend Card: ",props);
    return(
        <div>
            <h3 style={{color: '#61dafb'}}>{props.friend.name}</h3>
            Age {props.friend.age}
            <p>Contact: {props.friend.email}</p>
        </div>
    )
}