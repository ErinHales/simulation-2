// .gitignore
// arrow function
// import, export  note: destructuring in House.js
// class based component and bind
// onClick event in House.js, onChange and event handler in StepOne.js
// props passed to House component and used in House.js
// render, JSX, nested Components
// state, setState, constructors
// House.js is a functional component that receives and renders props
// ComponentDidMount

// NO COMPONENT DID UPDATE

// axios, get, post and delete in Server/index.js   ----NO DELETE
// HashRouter in index.js
// Link

// I didn't see a usage of the props match object, but I might have missed it

// Switch, Route and component in route.js
// redux, actions, and action builders in ducks/reducer.js. mapStateToProps, connect and share state in StepOne
// store and reducer in ducks file
// express server running in Server/index.js 

// EXPRESS STATIC NOT USED IN THIS PROJECT

// body-parser used in Server/index.js
// delete endpoint, get endpoint, params, and post endpoint in Server/index.js

// NO QUERIES IN THIS PROJECT

// status codes in controller.js

// NO SESSIONS IN THIS PROJECT
// NO AUTH0
// NO SERVER MIDDLEWARE

// Alter table and create table statement in create_table.sql 
// insert statement in add_new_house.sql 
// NO JOIN STATEMENT
// select statement in get_houses.sql 
// NO SUBQUERIES
// massive connection in Server/index.js 
// massive SQL commands in Server/controller.js 
// NO DB PATTERNS

import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: []
        }
        this.getAllHomes = this.getAllHomes.bind(this);
    }

    componentDidMount() {
        axios.get("/allhouses").then(res => {
            this.setState({
                houseList: res.data
            })
        })
    }

    getAllHomes() {
        axios.get("/allhouses").then(res => {
            this.setState({
                houseList: res.data
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/delete/${id}`).then(res => {
            console.log("You just removed a house from the list");
            this.getAllHomes();
        })
    }

    render() {
        var showHouses = [];
        this.state.houseList.forEach((house, index) => {
            showHouses.push(<House key={"house" + index} house={house} delete={this.deleteHouse} />)
        });
        
        return(
            <div className="dashboard">
                <div className="dashboardHeader">
                    <div>
                        <h1>Dashboard</h1>
                        <h2>House Listings:</h2>
                    </div>
                    <Link to="/wizard/step1"><button className="button addProperty">Add New Property</button></Link>
                </div>
                {showHouses}
            </div>
        )
    }
}