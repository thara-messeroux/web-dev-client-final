import initialState from "../data/profile.json";

const ProfileInfo = (state = initialState, action) => {
    switch(action.type) {
        case 'update-profile':
            let updateProf = {
                ...state,
                ...action.newProfile}
            return updateProf;
        default:
            return state;
    }
}

export default ProfileInfo;