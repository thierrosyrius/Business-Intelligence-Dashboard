import React,{Component} from 'react';
import {Pie,Bar, Doughnut,Polar} from 'react-chartjs-2';
class AnalyticsChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data1:{
                labels: ['Payés', 'Non Payés'],
               datasets: [{
                label: 'data viz',
                backgroundColor: ['#F5FFFA','#4169E1'],
                borderColor: 'black',
                data: [17.30,82.70]
                }]
           },
           data2: {
            labels: ['achevé', 'non achevé'],
            datasets: [{
                label: 'data viz',
                backgroundColor: ['#B0E0E6','#8B008B'],
                data: [113,136]
            }]
        },
        data3:{
            labels:['ComitLab','Djaale','Tex Courrier','ShopMeAway'],
            datasets:[{
            label:'data viz',
            backgroundColor:['navy','fuchia','lime','aqua'],
            data: [3,2,2,19]
             }]
       },
       data4: {
        labels: ['Angular', 'Angular&bootstrap', 'Python', 'Wordpress', 'Django', 'Python&django', 'Ionic','Laravel','Bootstrap','HTML&CSS','HTML','Javascript','React','PHP&MYSQL','Inkscape',
        'Java Android Studio','Jquery','Drupal'],
        datasets: [{
            label: 'data viz',
            backgroundColor: 'darkblue',
            borderColor: 'black',
            data: [96,2,104,42,23,8,13,5,18,46,18,27,17,14,35,4,4,2]
        }]
          }
        }
    }
    render(){
        return(
            <div className="App">
                <div  className="shadow" id="bak">
                    <div id="comment">
                <div className="info-box" id="bak">
                <span className="info-box-icon"><i class="material-icons" id="thumb_up">
                                    thumb_up
                          </i></span>
					  <div class="info-box-content">
						<span className="info-box-text">Likes</span>
						<span className="info-box-number"> <strong>41,410 </strong></span>
						<div className="progress">
						  <div className="progress-bar" id="comments"></div>
						</div>
						<span className="progress-description">
						  70% d'augmentations en 30 jours
						</span>
					  </div>
                </div>
                </div>
                </div>
                <div className="shadow" id="bak">
                <div  id='comment'>
                <div className="info-box" id="bak">
                <span className="info-box-icon"><i class="material-icons">
                        insert_comment
                        </i></span>
					  <div class="info-box-content">
						<span className="info-box-text">Commentaires</span>
						<span className="info-box-number"> <strong>1,410 </strong></span>
						<div className="progress">
						  <div className="progress-bar" id="commentaire"></div>
						</div>
						<span className="progress-description">
						  56% d'augmentations en 30 jours
						</span>
					  </div>
                </div>
						</div>
                </div>
                <div className="shadow"id="bak">
                    <Doughnut data={this.state.data1}
                    options={{
                        title:{
                            display:true,
                            text:" Le taux du nombre de candidats payés et non payés aux tests",
                            fontSize:20
                        }
                    }}
                    />
                </div>
                <div className="shadow"id="bak">
                <Polar data={this.state.data2}
                    options={{
                        title:{
                            display:true,
                            text:"Le nombre de personnes ayant achevées ou non la formation",
                            fontSize:20
                        }
                    }}
                    />
                </div>
                <div className="shadow"id="bak">
                <Pie data={this.state.data3}
                    options={{
                        title:{
                            display:true,
                            text:"Le contrat signé par entreprise",
                            fontSize:20
                        }
                    }}
                    />
                </div>
                <div className="shadow"id="bak">
                <Bar data={this.state.data4}
                    options={{
                        title:{
                            display:true,
                            text:"Le contrat signé par entreprise",
                            fontSize:20
                        }
                    }}
                    />
             </div>
             <div className="shadow"id="bak">
             <Pie data={this.state.data5}
                    options={{
                        title:{
                            display:true,
                            text:"Evolution du temps de connexion par rapport aux nombres d'utilisateurs par jour",
                            fontSize:20
                        }
                    }}
                    />

             </div>
            </div>
        );
    }
    
}
export default AnalyticsChart;