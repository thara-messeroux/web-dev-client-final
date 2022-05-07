import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Following = () => {

    const { id } = useParams();
    // converting the id to number
    const idNumber = Number(id);

    const [profile, setProfile] = useState({});
    const [tweets, setTweets] = useState({});

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
                'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
            }
        };
        
        fetch('https://twitter32.p.rapidapi.com/getFollowing?user_id='+idNumber, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setProfile(response);
            })
            .catch(err => console.error(err));
    }, [])


  return (
      <div className='container'>
          <div className="row">
           
          </div>
</div>
  )
}

export default Following