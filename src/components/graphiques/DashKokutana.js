import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
class KokutanaChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data1:{
                labels: ['nombres', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
               datasets: [{
                label: 'data viz',
                backgroundColor: '#9400D3',
                borderColor: '#DC143C',
                data: [39.4,21.19,18.12,47.67,19.08,22.17,25.09],
                fill:false
                }]
           },
           data2:{
            labels: ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
           datasets: [{
            label: 'data viz',
            backgroundColor: '#2F4F4F',
            borderColor: '#DC143C',
            data: [39.4,21.19,18.12,47.67,19.08,22.17,25.09]
            }]
       }

        }
    }
    render(){
        return(
            <div className="App">
                <div className="shadow" id="bak">
                <h4 className="card-header"> Le nombre d'inscrits<span className="tag tag-success" id="nbre-tag"><span className="vert"> 1056</span></span></h4>  
                </div>
                <div className="shadow" id="bak">
                <h4 className="card-header"> Le nombre de partenaires <span className="tag tag-success" id="nbre-tag"><span className="vert"> 24</span></span></h4>
                </div>
                <div className="shadow" id="bak">
                    <Line data={this.state.data1}
                    options={{
                        title:{
                            display:true,
                            text:"Evolution du temps de connexion par jour",
                            fontSize:20
                        }
                    }}
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
export default KokutanaChart;