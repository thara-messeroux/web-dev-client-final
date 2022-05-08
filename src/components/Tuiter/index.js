import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import RelatedUsers from "../../pages/RelatedUsers";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
const Tuiter = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState({});

  useEffect(() => {

     // getting token from local storage
     const token = localStorage.getItem("token");
    
     if(token){
      // if the user is logged in
      // redirecting to the home page
      navigate("/profile");
    }else{
      // if the user is not logged in
      // redirecting to the login page
      navigate("/login");
    }

    async function fetchUsers() {
      const response = await fetch(
        "https://web-dev-server-final.herokuapp.com/api/users"
      );
      const users = await response.json();
      console.log("users are", users);
      setUsers(users);
    }
    fetchUsers();

  }, []);


 

  return (
    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="profile"/>
      </div>
      <div className="col-8 col-lg-7 col-xl-6">
        <Outlet />
      </div>
      <div className="col-2 col-lg-4 col-xl-4">
        {Object.keys(users).length > 0 ? <RelatedUsers users={users}/> : <div>No users to follow</div>}
        <WhoToFollowList/>
      </div>
    </div>
  );
};
export default Tuiter;
