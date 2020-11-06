import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function FriendCard(props) {
    const removeHistory = useHistory();
    console.log("Props are: ", props.friends);
    const removeFriend = e => {
        // console.log("This Friend ID is: ", e)
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${ props.friend.id }`)
        .then((res) => {
            console.log(res.data)
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