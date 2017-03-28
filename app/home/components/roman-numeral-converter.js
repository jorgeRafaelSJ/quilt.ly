import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/roman-numeral-converter-redux';

import QuiltBox from './quilt-box';
class RomanNumeralConverter extends Component {
	constructor(props) {
		super(props);

		this.onIntegerChange = (el) => {
			this.props.changeInteger(el.target.value);
		}

		this.onNumeralChange = (el) => {
			this.props.changeNumeral(el.target.value);
		} 
	}

	render() {
		return (
			<QuiltBox> 
				<form> 
					<input
						value={this.props.integer}
						onChange={this.onIntegerChange.bind()}
					/>
					<input
						value={this.props.numeral}
						onChange={this.onNumeralChange.bind()}
					/>
				</form> 
			</QuiltBox> 
		)
	}
}
// CONNECT TO REDUX AND EXPORT COMPONENT 
const mapStateToProps = (state, ownProps) => state.rn_converter;
export default connect(mapStateToProps, actions)(RomanNumeralConverter);