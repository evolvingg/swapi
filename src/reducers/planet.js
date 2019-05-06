const initialState= {
    selectedPlanet: null
};

export default function selected(state=initialState , action) {
    switch(action.type) {
        case 'PLANET':
            return {...state ,selectedPlanet: action.planet};
        case 'UPDATE':
        console.log(this.state);
            return {...state , planets: action.val};
        default:
            return state;
    }
}