import React, { useEffect, useState } from 'react'
import NavigationSidebar from '../components/Tuiter/NavigationSidebar';
import WhoToFollowList from '../components/Tuiter/WhoToFollowList';

const Home = () => {
		const [tweets, setTweets] = useState({});
		const [searchValue, setSearchValue] = useState('');
		const [loggedInUser, setLoggedInUser] = useState({});

		useEffect(() => {
				const options = {
						method: 'GET',
						headers: {
								'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
								'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
						}
				};
				// getting tweets about crypto
				fetch('https://twitter32.p.rapidapi.com/getTweetsByHashtag?hashtag=johnnydeep', options)
						.then(response => response.json())
						.then(response => {
								console.log(response); setTweets(response)
						})
						.catch(err => console.error(err));
		}, []);

		useEffect(() => {
			// Checking if user is logged in using localStorage token
			const token = localStorage.getItem('token');
			const username = localStorage.getItem('username');
			const email = localStorage.getItem('email');
			const phone = localStorage.getItem('phone');
			// if user is logged in
			if (token) {
				// setting loggedInUser to the user's profile
				setLoggedInUser({
					username,
					email,
					phone
				});
			} else {
				// if user is not logged in
				setLoggedInUser('');
			}
		}, []);

		function fetchTweets() {
				const options = {
						method: 'GET',
						headers: {
								'X-RapidAPI-Host': 'twitter32.p.rapidapi.com',
								'X-RapidAPI-Key': 'e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53'
						}
				};
				// getting tweets about crypto
				fetch('https://twitter32.p.rapidapi.com/getTweetsByHashtag?hashtag=' + searchValue, options)
						.then(response => response.json())
						.then(response => {
								console.log(response); setTweets(response)
						})
						.catch(err => console.error(err));
		}

	return (
		<div className="row mt-2">
			<div className="col-2 col-lg-1 col-xl-2">
				<NavigationSidebar active='home'/>
			</div>
			<div className="col-6 col-lg-7 col-xl-6">
					<h2 className='mb-4'>People are tweeting</h2>

					<form className='mb-4' onSubmit={(e) => { e.preventDefault(); fetchTweets() }}>
						<input type="text" className="form-control mb-2" placeholder="Search tweets" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
						<input type="submit" className="btn btn-primary" value="Search" />
					</form>

						{ Object.keys(tweets).length > 0 &&  Object.values(tweets.data.tweets).map((tweet, index) => {
								return(
										<div className="card mb-2 p-2" key={index}>
												<p>{tweet.full_text}</p>
												<p>Posted at: <span>{tweet.created_at.split('+')[0]}</span></p>
										</div>
								)
							}
						)}
			</div>
			<div className="col-2 col-lg-4 col-xl-4">
				{Object.keys(loggedInUser).length > 0 &&
					<div>
						<h5 className='mb-2'>{loggedInUser && loggedInUser?.username}</h5>
						<h6 className='mb-2'>{loggedInUser && loggedInUser?.email}</h6>
						<strong className='mb-2'>{loggedInUser && loggedInUser?.phone}</strong>
					<WhoToFollowList/>
					</div>
				}
			</div>
		</div>
	)
}

export default Home