import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { connect } from	'react-redux'
import { dfAction } from './actions'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="">Home</div>
		)
	}
}

const mapStateToProps = (state)=> {
  return {
		df : state.df
	}
};

const mapDispatchToProps = (dispatch, ownProps)=> {
	return {
    dfAction: bindActionCreators(dfAction,dispatch)
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
