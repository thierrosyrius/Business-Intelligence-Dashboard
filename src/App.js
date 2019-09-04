
import logo from './logo.svg';
import './App.css';
import { emptyStatement } from '@babel/types';
import { BrowserRouter as Router,Link,NavLink,BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Template from './components/Template';
import BakeliChart from './components/graphiques/DashBakeli';
import AnduChart from './components/graphiques/DashAndu';
import FewnuChart from './components/graphiques/DashFewnu';
import KokutanaChart from './components/graphiques/DashKokutana';
import ElikiaChart from './components/graphiques/DashElikia';
import TayeurChart from './components/graphiques/DashTayeur';
import { Navbar } from 'react-bootstrap';
import AnalytisChart from './components/graphiques/Analytics';
import {Line,Polar,Bar} from 'react-chartjs-2';
import  React,{	Component} from 'react';
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			data:{
                labels: ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
               datasets: [{
                label: 'data viz',
                backgroundColor: '#483D8B',
                borderColor: 'black',
                data: [115,50,70,120,57,100,25],
                fill:false
				}]
			}
		}
	}
	
	render(){
		return(
			<div className='App'>
					<Template/>
					<div className="shadow" id="bak">
		  					<h4 class="card-header"> Le taux d'usage <span class="tag tag-success" id="nbre-tag"><span class="vert"> 0.25%</span></span></h4>
							 <div class="small-box bg-success">
							   <div class="inner">
								 <h3>1056</h3>
								 <p>Le nombre d'utilisateurs</p>
							   </div>
							   <div class="icon">
							   <i class="material-icons">
								  people_outline
								</i>
							   </div>
					 </div>
 
		  			</div>
		  					<div className="shadow" id="bak">
		  					<h4 class="card-header"> le taux de reussite <span class="tag tag-success" id="nbre-tag"><span class="vert"> 0.18%</span></span></h4>
							 <div class="small-box bg-warning">
							   <div class="inner">
								 <h3>345</h3>
								 <p>Le nombre de candidats</p>
							   </div>
							   <div class="icon">
							   <i class="material-icons">
									people_alt
								</i>
							   </div>
							 </div>
		            </div>
					<div className="shadow" id="bak">
					   <div class="small-box bg-primary">
						<div class="inner">
							<h3>44</h3>
							<p>Le nombre de personnes inscrites</p>
						</div>
						<div class="icon">
						<i class="material-icons">
						   person_add
						</i>
						</div>
						</div>	
					</div>
					<div className="shadow" id="bak">
						<Line data={this.state.data}
						 options={{
							title:{
								display:true,
								text:"Evolution du temps de connexion par jour",
								fontSize:20
	
							}
						}}
						 />
					</div>
	 	 </div>	    

		);
	}
}

export default App;
