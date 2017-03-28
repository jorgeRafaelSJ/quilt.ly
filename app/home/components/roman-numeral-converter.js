import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/redux';

import QuiltBox from './quilt-box';
class RomanNumeralConverter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<QuiltBox> 
				<div> HELLO CONVERTER! </div>
				
			</QuiltBox> 
		)
	}
}
// CONNECT TO REDUX AND EXPORT COMPONENT 
const mapStateToProps = (state, ownProps) => state.home;
export default connect(mapStateToProps, actions)(RomanNumeralConverter);