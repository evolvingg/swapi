import React from 'react';
import './Login.scss';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state={
            people: []
        }
    }

    componentDidMount() {
        console.log(this.props);
        axios.get(`https://swapi.co/api/people`)
        .then(res => {
            let people = res.data.results;
            this.setState({
                people: people
            })
        });
    }

    called = (e) => { 
        e.preventDefault();       
        const udata = this.uname.value;
        const pswd = this.pswd.value;
        console.log('state,props::',this.state,this.props)
        this.state.people.slice(0).map((person) => {
            if( person.name === udata && person.birth_year === pswd) {
                this.props.logs(true);
                console.log('qqq')
                this.props.location.pathname='/search';
                console.log('sdsds');
            }
        });

    }

    renderPage = () => {
        return (
            <div className="container">
                <form name="user-details" className="user-details" autoComplete="off" action='#' onSubmit={this.called}>
                    <div className="row input-holder">
                        <label>
                            Username:<input type="text" className="user" name="uname" ref={(uname) => this.uname = uname}/>
                        </label>
                    </div>
                    <div className="row input-holder">
                        <label>
                            Password:<input type="password" name="pswd" className="pswd" ref={(pswd) => this.pswd = pswd}/>
                        </label>
                    </div>
                    <div className="row input-holder">
                        <input type="submit" className="btn" value="Login"/>
                    </div>
                </form>                
            </div>
        );
    }


    render() {
        console.log('Props::',this.props.loggedIn,this.props);
        return (
            <React.Fragment>
                <div className="container">
                    {this.props.loggedIn ? <Logout {...this.props}/>:this.renderPage()}
                </div>
            </React.Fragment>
        );
    }
}

class Logout extends React.Component {
    logout = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.logout(false);       
    }

    render(){
        return (
            <div className="user-details">
                <p>U r already loggedIn</p>
                <button className="btn primary-btn" onClick={this.logout}>
                    Logout
                </button>
            </div>
        );

    }
}

export default Login;
