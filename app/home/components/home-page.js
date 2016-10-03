import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class HomePage extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div className="home-page">
			Hello World! 
			</div>
		);
	}
}

// CONNECT TO REDUX AND EXPORT COMPONENT 
function mapStateToProps(state) {
	return { home: state.home }
}

function mapDispatchToProps(dispatch) {
	return { 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)