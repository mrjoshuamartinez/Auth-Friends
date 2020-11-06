  
import React from "react";
import Friends from "./Friends";
import Header from './Header';
import { useHistory } from 'react-router-dom';
import '../App.css';

export default function FriendsHomePage() {
    const history = useHistory();
    return (
    <>
    <div className="span-hover">
        <span
            style={{
                fontSize: '15px',
                color: '#61dafb',
                fontWeight: '700',
                fontFamily: 'Tahoma',
                cursor: 'pointer'
            }}
            onClick={() => {
                localStorage.removeItem("token");
                history.push("/login")
            }}
        >
            Logout
        </span>
    </div>
        <Header />
        <Friends />
    </>
    )
}