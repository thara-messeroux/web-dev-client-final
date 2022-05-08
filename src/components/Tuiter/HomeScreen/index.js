import React, { useEffect, useState } from "react";

import PostList from "../PostList";
import User from "../User/User";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {

    const [profile, setProfile] = useState({});

    const username = localStorage.getItem('username');
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
                'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
            }
        };
        
        fetch('https://twitter32.p.rapidapi.com/getProfile?username='+ username, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setProfile(response);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="col">
            { Object.keys(profile).length > 0 && <User profile={profile} />}
            <WhatsHappening/>
            { Object.keys(profile).length > 0 && <PostList profile={profile}/>}
        </div>
    )
}

export default HomeScreen;