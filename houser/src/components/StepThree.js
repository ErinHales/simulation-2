import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateRent} from '../ducks/reducer';

class StepThree extends Component {
    constructor() {
        super();

        this.state = {
            mortgage: 0, 
            rent: 0
        }
    }

    componentDidMount() {
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        })
    }

    eventHandler(prop, e) {
        this.setState({
            [prop]: e.target.value
        })
    }

    postHouse() {
        var {name, address, city, state, zipcode, image} = this.props;
        var {mortgage, rent} = this.state;
        if(name !== "" && address !== "" && city !== "" && state !== "" && zipcode !== null) {
            axios.post("/newhouse", {name, address, city, state, zipcode, image, mortgage, rent}).then(res => {
            console.log("Congratulations, you added a house!");
            })
        }
    }

    render() {
        const {mortgage, rent} = this.state;
        return(            
            <div className="form">
                <h2>Monthly Mortgage Amount</h2>
                <input 
                    type="text" 
                    placeholder="0" 
                    value={this.state.mortgage}
                    onChange={(e) => this.eventHandler("mortgage", e)} />
                <h2>Desired Monthly Rent</h2>
                <input 
                    type="text" 
                    placeholder="0" 
                    value={this.state.rent}
                    onChange={(e) => this.eventHandler("rent", e)} />
                <Link className="previous" to="/wizard/step2" onClick={() => this.props.updateRent(mortgage, rent)}>Previous</Link>
                <button className="button" onClick={() => {
                    this.postHouse()
                    this.props.updateRent(mortgage,rent)}}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
        image: state.image,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, {updateRent})(StepThree);