import React from 'react';

export default function PlanetDetails(props) {
    const params = props.location.pathname;
    console.log(params,props)
    return (
            <React.Fragment>
                {props.selectedPlanet ? (                
                <ul className="container">
                <li>Name: {props.selectedPlanet.name}</li>
                <li>Created: {props.selectedPlanet.created}</li>
                <li>diameter: {props.selectedPlanet.diameter}</li>
                <li>orbital_period: {props.selectedPlanet.orbital_period}</li>
                <li>terrain: {props.selectedPlanet.terrain}</li>
                </ul>) :""}
            </React.Fragment>
    )
}