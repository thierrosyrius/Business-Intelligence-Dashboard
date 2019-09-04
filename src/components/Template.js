import React, {Component} from 'react';
import { BrowserRouter as Router,Link,NavLink,BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {container, Navbar} from 'react-bootstrap';
import {Pie, Area, Bar,Line} from 'react-chartjs-2';
import BakeliChart from './graphiques/DashBakeli';
import AnduChart from './graphiques/DashAndu';
import FewnuChart from './graphiques/DashFewnu';
import KokutanaChart from './graphiques/DashKokutana';
import ElikiaChart from './graphiques/DashElikia';
import TayeurChart from './graphiques/DashTayeur';
import AnalyticsChart from './graphiques/Analytics';
class Template extends Component{
    render(){
        return(
            <div className='App'>
                <BrowserRouter>
                <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/App"><strong>volkeno</strong></a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                    <u className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#"> sign out</a>
                        </li>
                    </u>
                </nav>
                </div>
                <div className="container-fluid" id='gauche'>
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" exact to="/App">
                                                <i class="material-icons">
                                                  dashboard
                                                </i>
                                           <strong> Dashboard</strong><span className="sr-only">(current)</span>
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" exact to="DashBakeli">
                                            <span className="text" > Bakeli</span>
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" exact to="DashAndu">
                                            <span className="text" >Andu</span>
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active"exact to="DashFewnu">
                                            <span className="text" >Fewnu</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" exact to="DashKokutana">
                                            <span className="text" >Kokutana</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" exact to="/DashElikia">
                                            <span className="text" > Elikia</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" exact to="/DashTayeur">
                                            <span className="text" >Tayeur</span>   
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                             <NavLink className="nav-link active" exact to="/Analytics">
                                        <ion-icon name="stats"></ion-icon>
                             <span className=""><strong>Analytics</strong></span>
                             </NavLink>
                         </li>

                                </ul>

                            </div>

                        </nav>

                    </div>

                </div>
                <div className='route'>
                     
                     <Route path="/DashBakeli" component={BakeliChart}/>
                     <Route path="/DashAndu" component={AnduChart}/>
                     <Route path="/DashFewnu" component={FewnuChart}/>
                     <Route path="/DashKokutana" component={KokutanaChart}/>
                     <Route path="/DashElikia" component={ElikiaChart}/>
                     <Route path="/DashTayeur" component={TayeurChart}/>
                     <Route path="/Analytics" component={AnalyticsChart}/>
                      </div>
                </BrowserRouter>

            </div>
        
               
        );
    }
}
export default Template;