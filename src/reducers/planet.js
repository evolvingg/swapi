const initialState= {
    selectedPlanet: null
};

export default function selected(state=initialState , action) {
    switch(action.type) {
        case 'PLANET':
            return {...state ,selectedPlanet: action.planet};
        case 'UPDATE':
            console.log(state);
            return {...state , planets: action.val};
        default:
            return state;
    }
}