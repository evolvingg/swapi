import React from 'react';
import './Search.scss';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";

class Search extends React.Component {

renderPlanets = () =>  {
    let p = this.props.planets.slice(0);
    console.log('Planets::',p);
    return p.map((pl,index)=>{
    return (
    <li key={index} className="col-6" onClick={this.props.called.bind(this,index)} >
        <Link className="button" to={`/view/${pl.name}`}>
        <div className="planet">
                <span>{pl.name}</span>
        </div>
        </Link>
    </li>);
    })
}

handleInputChange = (e) => {
    var updatedList = this.props.planets.slice(0);
    console.log('updatedList::',updatedList);
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.props.handle(updatedList);
}


    render() {
        console.log(this.props);
        return(
            <React.Fragment>
                <div className="container">
                    <form className="search-container">
                        <input placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}/>
                    </form>
                    <ul className="grid">
                        {this.props.planets ? this.renderPlanets() :null}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;