const initialState={
    loggedIn: false
};

export default function logged(state=initialState , action) {
    switch(action.type) {
        case 'LOGGEDIN':
            return {...state ,loggedIn: action.flag};
        case 'LOGOUT':
            return {...state ,loggedIn: action.flag};
        default:
            return state;
    }
}