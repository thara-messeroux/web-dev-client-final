import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationSidebar from "../components/Tuiter/NavigationSidebar";
import WhoToFollowList from "../components/Tuiter/WhoToFollowList";

const Followers = () => {
  const { id } = useParams();
  // converting the id to number
  const idNumber = Number(id);

  const [profile, setProfile] = useState({});
  const [tweets, setTweets] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "twitter32.p.rapidapi.com",
        "X-RapidAPI-Key": "e0844fc459msh37fd0c441c442d9p136568jsn96f95a54ff53",
      },
    };

    fetch(
      "https://twitter32.p.rapidapi.com/getFollowers?user_id=" + idNumber,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProfile(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="home" />
      </div>
      <div className="col-6 col-lg-7 col-xl-6">
        {/* showing following */}
        {Object.keys(profile).length > 0 &&
          profile.data.users.map((user, index) => {
            return (
              <div className="col-12">
                <div className="card mb-2 w-50 mx-auto">
                  <div className="card-body d-flex">
					  	<div className="me-2">
						  <img src={user?.content?.itemContent?.user?.legacy?.profile_image_url_https} alt="avatar" className="tuit-avatar img-fluid rounded-circle" />
						</div>
						<div>
							<h5>{user?.content?.itemContent?.user?.legacy?.name}</h5>
							<p>{user?.content?.itemContent?.user?.legacy?.description}</p>
						</div>
				  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="col-2 col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  );
};

export default Followers;
