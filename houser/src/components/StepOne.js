import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAddress} from '../ducks/reducer';

class StepOne extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            address: "", 
            city: "", 
            state: "",
            zipcode: ""
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode
        })
    }

    eventHandler(prop, e) {
        this.setState({
            [prop]: e.target.value
        })
    }

    render() {
        var {name, address, city, state, zipcode} = this.state;
        return(            
            <div className="form">
                <div className="formHeader">
                </div>
                <input 
                    type="text"
                    placeholder="name" 
                    value={this.state.name}
                    onChange={(e) => this.eventHandler("name", e)} />
                <input 
                    type="text" 
                    placeholder="address" 
                    value={this.state.address}
                    onChange={(e) => this.eventHandler("address", e)} />
                <input 
                    type="text" 
                    placeholder="city" 
                    value={this.state.city}
                    onChange={(e) => this.eventHandler("city", e)} />
                <input 
                    type="text" 
                    placeholder="state" 
                    value={this.state.state}
                    onChange={(e) => this.eventHandler("state", e)} />
                <input 
                    type="text" 
                    placehoder="zipcode" 
                    value={this.state.zipcode}
                    onChange={(e) => this.eventHandler("zipcode", e)} />
                <Link className="next" to="/wizard/step2" onClick={() => this.props.updateAddress(name, address, city, state, zipcode)}>Next</Link>
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
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, {updateAddress})(StepOne);