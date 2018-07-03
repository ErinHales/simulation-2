import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImage} from '../ducks/reducer';

class StepTwo extends Component {
    constructor() {
        super();

        this.state = {
            image: ""
        }
    }

    componentDidMount() {
        this.setState({
            image: this.props.image
        })
    }

    eventHandler(e) {
        this.setState({
            image: e.target.value
        })
    }

    render() {
        var {image} = this.state;
        return(            
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={this.state.image}
                    onChange={(e) => this.eventHandler(e)} />
                <Link className="previous" to="/wizard/step1" onClick={() => this.props.updateImage(image)}>Previous</Link>
                <Link className="next" to="/wizard/step3" onClick={() => this.props.updateImage(image)}>Next</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, {updateImage})(StepTwo);