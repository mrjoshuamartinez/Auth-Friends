import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory, Link } from 'react-router-dom';

export default function AddFriend() {
    const history = useHistory();
    const [friendCount, setFriendCount] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res) => {
                // console.log("Friends: ", res.data);
                setFriendCount(res.data);
                // console.log("Friend Count: ", friendCount)
            })
            .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
        
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
        <>
            <form className="Add-friend" onSubmit={submit}>
                <h3>Add Friend</h3>
                <label className="margin-5px" htmlFor="name">Your name</label>
                <input type="text" name="name" value={friend.name} placeholder="name" onChange={handleChange} />
                <label className="margin-5px" htmlFor="age">How old are you?</label>
                <input name="age" value={friend.age} onChange={handleChange} placeholder="age" />
                <label className="margin-5px" htmlFor="email">What's your email?</label>
                <input type="email" name="email" placeholder="your@email.com" value={friend.email} onChange={handleChange} />
                <button 
                    className="Add-friend-button"
                    style={{
                        width: '100px',
                        height: '25px',
                        borderRadius: '8px',
                        borderColor: '#61dafb',
                        backgroundColor: 'grey',
                        color: '#282c34',
                        fontWeight: 'bolder'
                    }}
                >
                    Add Friend
                </button>
            </form>
            {friendCount.length === 0 ? "" : <Link className="Add-friend-link" to="/home">
                <span
                    style={{
                        color: 'white',
                        fontSize: '16px'
                    }}
                >
                    Home
                </span>
            </Link>}
        </>
        )
}