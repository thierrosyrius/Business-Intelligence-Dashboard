import React ,{Component} from 'react';
import { Line, Bar } from "react-chartjs-2";

class TayeurChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data1:{
                labels: ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
               datasets: [{
                label: 'data viz',
                backgroundColor: '#6a5acd',
                borderColor: '##ff6347',
                data: [255,70,150,240,27,80,35]
                }]
           },
           data2:{
            labels: ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
           datasets: [{
            label: 'data viz',
            backgroundColor: '#6495ED',
            borderColor: '#DC143C',
            data: [49.4,24.19,20.12,58.67,21.08,29.17,38.09]
            }]
       }
     
        }
    }
    render(){
        return(
            <div className="App">
                <div className="shadow" id="bak">
                <h4 class="card-header"> Le nombre d'utilisateurs<span className="tag tag-success" id="nbre-tag"><span className="vert"> 2456</span></span></h4>      
                </div>
                <div className="shadow" id="bak">
                <h4 class="card-header"> Le taux de connextion <span className="tag tag-success" id="nbre-tag"><span className="vert"> 0.45%</span></span></h4>
                </div>
                <div className="shadow" id="bak">
                    <Line data={this.state.data1}
                    options={{
                        title:{
                            display:true,
                            text:"Evolution du nombre d'utilisateurs par jour",
                            fontSize:20
                        }
                    }
                    }
                    />
                </div>
                <div className="shadow" id="bak">
                    <Bar data={this.state.data2}
                    options={{
                        title:{
                            display:true,
                            text:"temps moyen de connexion par jour",
                            fontSize:20
                        }
                    }}
                    />

                </div>

            </div>
        );
    }
}
export default TayeurChart;