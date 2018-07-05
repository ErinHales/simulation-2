import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import {connect} from 'react-redux';
import {cancel} from '../../ducks/reducer';


class Wizard extends Component {

    render() {
        return(
            <div className="form">
                <Route path="/wizard/step1" component={StepOne} />
                <Route path="/wizard/step2" component={StepTwo} />
                <Route path="/wizard/step3" component={StepThree} />
                <Link to="/" className="button pink" onClick={() => this.props.cancel()}>Cancel</Link>
            </div>
        )
    }
}

export default connect(null, {cancel})(Wizard);