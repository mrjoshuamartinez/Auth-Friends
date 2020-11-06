import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';

export default function AddFriend() {
    const history = useHistory();
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) => {
        e.persist();
        setFriend({
            ...friend, [e.target.name]: e.target.value
        });
    }
    
    const submit = (e) => {
        e.preventDefault();
        setFriend({
            name: e.target.name.value,
            age: e.target.age.value,
            email: e.target.email.value
        });
        // console.log(`Submitted ${ friend.name } ${ friend.age } ${ friend.email } `)
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", friend)
            .then((res) => {
                history.push("/home")
            })
            .catch((err) => {
                console.log("Error for Post Friend API: ", err);
            })
    }

    return (
        <form className="Add-friend" onSubmit={submit}>
            <h3>Add Friend</h3>
            <label className="margin-5px" htmlFor="name">Your name</label>
            <input type="text" name="name" value={friend.name} placeholder="name" onChange={handleChange} />
            <label className="margin-5px" htmlFor="age">How old are you?</label>
            <input name="age" value={friend.age} onChange={handleChange} placeholder="age" />
            <label className="margin-5px" htmlFor="email">What's your email?</label>
            <input type="email" name="email" placeholder="your@email.com" value={friend.email} onChange={handleChange} />
            <button className="Add-friend-button">Join</button>
        </form>
    )
}