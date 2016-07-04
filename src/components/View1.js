import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {add} from '../redux/actions/actionView1'
/*
const View1 = ({reducer2}) => (
	<div>
	{reducer2[0].title}
	</div>
);
*/

class View1 extends Component{
	constructor(props){
		super(props);
		this.state={
			name: "Goofy"
		}
	}

	onChange(e){
		this.setState({name: e.target.value});
	}

	componentDidMount() {
		this.props.add();
	}
	render() {
		return (
			<div> hey 
			<input type="text" value={this.state.name} onChange={this.onChange.bind(this)} />
			</div>
		);
	}
}

export default View1;

const mapStateToProps = (state) => ({
	reducer2: state.reducer2,
});

const mapDispatchToProps = (dispatch)=>{
	return bindActionCreators({	
		add:add
	},dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(View1);
