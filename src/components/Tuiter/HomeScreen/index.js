import React, { useEffect, useState } from "react";
// https://web-dev-server-final.herokuapp.com/
import PostList from "../PostList";
import User from "../User/User";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {

	const [user, setUser] = useState(null);
    const [profile, setProfile] = useState({});

    useEffect(()=> {
        const fetchUser = async () => {
			const user = await fetch("https://web-dev-server-final.herokuapp.com//user");
			const data = await user.json();
			setUser(data);
		}

		fetchUser();
    }, []);


    const username = localStorage.getItem('username');
    console.log(username);
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
            {<User profile={profile} />}
            <WhatsHappening user={user}/>
            <PostList profile={profile}/>
        </div>
    )
}

export default HomeScreen;