import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function FriendCard(props) {
    console.log("Props are: ", props.friends);
    const history = useHistory();
    const removeFriend = e => {
        // console.log("This Friend ID is: ", e)
        if (props.friends.length === 1) {
            axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${ props.friend.id }`)
            history.push("/addFriend")
        }
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${ props.friend.id }`)
        .then((res) => {
            console.log("Response from API for removeFriend: ", res.data)
        })
        .catch((err) => {
            console.log("Error for removeFriend: ", err)
        })
    };
    return(
        <form onSubmit={ removeFriend }>
            <div id={props.friend.id}>
                <h3 style={{color: '#61dafb'}}>{props.friend.name}</h3>
                Age {props.friend.age}
                <p style={{color: 'grey'}}>Contact: {props.friend.email}</p>
                <button>X</button>
            </div>
        </form>
    )
}