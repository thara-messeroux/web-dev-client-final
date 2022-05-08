import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const RelatedUsers = (users) => {
    const navigate = useNavigate();
    const [relatedUsers, setRelatedUsers] = useState({});

        async function fetchUser(searchValue) {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
                    'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
                }
            };
            
            fetch('https://twitter32.p.rapidapi.com/getProfile?username=' + searchValue, options)
                .then(response => response.json())
                .then(response => {
                        console.log(response)
                        // saving the response in localstorage when the response has come back from the api otherwise setting null
                        Object.keys(response).length > 0 ? 
                        localStorage.setItem("user", JSON.stringify(response))
                        : localStorage.setItem("user", null);
                        // navigating to the profile page
                        setRelatedUsers(response)

                        // checking if the related users are available
                        if (Object.keys(relatedUsers).length > 0) {
                            console.log(relatedUsers.data.id)
                            localStorage.setItem("searcheduser", relatedUsers.data.user_info.screen_name)
                            navigate('/profile/'+relatedUsers.data.id)
                        }
                    })
                .catch(err => console.error(err));
        }

  return (
    <div>
        <h3 className='mb-4'>Related Users</h3>
        {Object.keys(users).length > 0 ? 
        
            <div className="row mb-5">
                {
                    users.users.users.map((user) => {
                        return (
                            <div className="col-12 mb-2">
                                <h3>{user.name}</h3>
                                <h5>{user.email}</h5>
                                <h6>{user.phone}</h6>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    fetchUser(user.username);
                                }} className="btn btn-primary">See more</button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        : <div>No users to follow</div>}
    </div>
  )
}

export default RelatedUsers