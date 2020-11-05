import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from "react-loader-spinner";
import FriendCard from "./FriendCard";

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res) => {
                console.log("Friends: ", res.data);
                setFriends(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            {friends.length < 1 ? <Loader type="ThreeDots" color="#61dafb" height={40} width={40} /> : (
                <div className="friends-list">
                    <h1>Friends List:</h1>
                    {friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend}/>
                    })}
                </div>
            )}
        </div>
    );
};

export default Friends;