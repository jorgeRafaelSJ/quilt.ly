import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.onSayHello = () => {
			this.props.sayHello();
		};

		this.onSetUser = () => {
			this.props.setUser();
		};
	};

	render() {
		return(
			<div className="home-page">
				<div>Hello World!</div> 
				<button onClick={this.onSayHello.bind()}>SAY HELLO</button> 
			</div>
		);
	}
}

// CONNECT TO REDUX AND EXPORT COMPONENT 
const mapStateToProps = (state, ownProps) => state.home;
export default connect(mapStateToProps, actions)(HomePage);

