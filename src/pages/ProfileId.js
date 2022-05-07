import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProfileId = () => {

    const { id } = useParams();
    console.log("id is ",id);

    const [profile, setProfile] = useState({});
    const [tweets, setTweets] = useState({});
    const searcheduser = localStorage.getItem('searcheduser');
    console.log("profile is ",searcheduser);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
                'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
            }
        };
        
        fetch('https://twitter32.p.rapidapi.com/getProfile?username='+ searcheduser, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setProfile(response);
            })
            .catch(err => console.error(err));
    }, [])

    // using /api/user/:id
    useEffect(() => {
        const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
				'X-RapidAPI-Key': '5e57e5a857msh38d4527b2a1adf9p17b94ejsn288e784ad50f'
			}
		};
		
		fetch('https://twitter32.p.rapidapi.com/getTweetsByUsername?username=' + searcheduser, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setTweets(response);
            }) 
    }, [])


  return (
      <div className='container'>
          <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center h-100">
                  <div className='list-group'>
                      {Object.keys(profile).length > 0 &&
                          <h2 className='mb-3 pt-3'>{profile ? profile.data.user_info.name : "loading"} tweets are:</h2>
                      }

            {
                Object.keys(tweets).length > 0 &&  Object.values(tweets.data.tweets).map((tweet, index) => {
                    return(
                    <div>

                        <div className='card mb-2' key={index}>
                            
                            <div className='card-body'>
                                <div className="d-flex tuit-content-header">
                                    <div className="tuit-avatar-wrapper me-2">
                                        <img src={profile && profile.data.user_info.profile_image_url_https} alt="avatar" className="tuit-avatar img-fluid rounded-circle" />
                                    </div>
                                    <div className="tuit-content-header d-flex align-items-center flex-column flex-md-row mb-2">
                                            <span className="tuit-author me-md-2">{profile && profile.data.user_info.name}</span>
                                            <span className="tuit-author-handle me-md-2">@{profile && profile.data.user_info.screen_name}</span>
                                            <span className="tuit-date me-md-2">{tweet.created_at.split('+')[0]}</span>
                                    </div>
                                </div>
                                <div className="tuit-content-wrapper">
                                    <div className="tuit-content">
                                        <div className="tuit-content-body">
                                            <p>{tweet.full_text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tuit-footer d-flex justify-content-between">
                                    {/* adding fontawesome reply, retweet, like */}
                                        <span className="tuit-reply">
                                            <i className="fas fa-reply me-2"></i>
                                            {tweet.reply_count}
                                        </span>
                                        <span className="tuit-retweet">
                                            <i className="fas fa-retweet me-2"></i>
                                            {tweet.retweet_count}
                                        </span>
                                        <span className="tuit-like">
                                            <i className="fas fa-heart me-2"></i>
                                            {tweet.favorite_count}
                                        </span>
                                </div>
                            </div>
                        </div>
</div>
                    )
                })
            }
    </div>
    
              </div>
          </div>
</div>
  )
}

export default ProfileId