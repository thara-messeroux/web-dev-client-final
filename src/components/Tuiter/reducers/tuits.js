import initialState from "../data/tuits.json"

const tuits = (state = initialState, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked == true) {
                        tuit.liked = false;
                        tuit.numLikes--;
                    } else {
                        tuit.liked = true;
                        tuit.numLikes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const tuit = {
                "_id": (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "siteLink": "",
                "storyCaption": "",
                "storyTitle": "",
                "caption": action.tuit,
                "avatarImage": "../tuiter/images/reactjs.png",
                "storyImage": "../tuiter/images/reactjs.png",
                "numComments" :123,
                "numShares": 456,
                "numLikes": 789,
            };
            return ([
                    tuit,
                    ...state,
                ]
            );
        default:
            return(state);
    }

};

export default tuits;