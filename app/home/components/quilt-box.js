import React, { Component } from 'react';

export default class QuiltBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='quilt-box'>
				{this.props.children}
			</div>
		)
	}
}