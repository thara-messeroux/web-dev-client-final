import React, { useEffect, useState } from "react";
import './PostItem.css'

const PostList = ({ profile }) => {

	const [tuits, setTuits] = useState({});
	
	useEffect(() => {
		const timer = setTimeout(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
				'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
			}
		};
		
		fetch('https://twitter32.p.rapidapi.com/getTweetsByUsername?username='+ profile.data.user_info.screen_name, options)
			.then(response => response.json())
			.then(response => {console.log(response); setTuits(response)})
			.catch(err => console.error(err));
		}, 3000);
		return () => clearTimeout(timer);
	}, []);
	return(
		<div className='list-group'>
			{
				Object.keys(tuits).length > 0 &&  Object.values(tuits.data.tweets).map((tweet, index) => {
					return(
						<div className='card mb-2' key={index}>
							<div className='card-body'>
								<div className="d-flex tuit-content-header">
									<div className="tuit-avatar-wrapper me-2">
										<img src={profile && profile?.data?.user_info?.profile_image_url_https} alt="avatar" className="tuit-avatar img-fluid rounded-circle" />
									</div>
									<div className="tuit-content-header d-flex align-items-center flex-column flex-md-row mb-2">
											<span className="tuit-author me-md-2">{profile && profile?.data?.user_info?.name}</span>
											<span className="tuit-author-handle me-md-2">@{profile && profile?.data?.user_info?.screen_name}</span>
											<span className="tuit-date me-md-2">{tweet?.created_at.split('+')[0]}</span>
									</div>
								</div>
								<div className="tuit-content-wrapper">
									<div className="tuit-content">
										<div className="tuit-content-body">
											<p>{tweet?.full_text}</p>
										</div>
									</div>
								</div>
								<div className="tuit-footer d-flex justify-content-between">
									{/* adding fontawesome reply, retweet, like */}
										<span className="tuit-reply">
											<i className="fas fa-reply me-2"></i>
											{tweet?.reply_count}
										</span>
										<span className="tuit-retweet">
											<i className="fas fa-retweet me-2"></i>
											{tweet?.retweet_count}
										</span>
										<span className="tuit-like">
											<i className="fas fa-heart me-2"></i>
											{tweet?.favorite_count}
										</span>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default PostList;
