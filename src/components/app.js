

import React, { Component } from 'react';
import axios from "axios";
import CamperList from './camper_list.js';
import MDSpinner from 'react-md-spinner';



export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			recentCampers: [],
			allTimeCampers: [],
			currentView: 'recentCampers'
		};
	}

	componentWillMount(){
		axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
			.then(axios.spread((recentCampers, allTimeCampers) => {
				console.log(recentCampers);
				this.setState({ 
					recentCampers: recentCampers.data, 
					allTimeCampers: allTimeCampers.data
					});
				
			}));

	}

	fetchRecentCampers(){
		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
	}

	fetchAllTimeCampers(){
		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
	}

  render() {
  	if (!this.state.recentCampers.length && !this.state.allTimeCampers.length) {
  		return <MDSpinner className="spinner" size = {60} />
  	}

    return (
    <div>
      <div className="wrapper">	

      	<button className="button" onClick={() => this.setState({currentView: 'recentCampers'})} className="btn btn-info btn-lg btn3d">Recent</button>
      	<button className="button" onClick={() => this.setState({currentView: 'allTimeCampers'})} className="btn btn-info btn-lg btn3d">All Time</button>
      	</div>
      	
      	<CamperList campers={this.state[this.state.currentView]} />
      
      </div>
    );
  }
}
