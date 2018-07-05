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
        this.deleteHouse = this.deleteHouse.bind(this);
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

    deleteHouse (id) {
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