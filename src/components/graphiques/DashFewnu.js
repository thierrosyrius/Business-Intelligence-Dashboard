import React,{Component} from 'react';
import { Bar,Line } from 'react-chartjs-2';
class FewnuChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data1:{
                labels: ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
               datasets: [{
                label: 'data viz',
                backgroundColor: '##00CED1',
                borderColor: '#556B2F',
                data: [115,50,70,120,57,100,25],
                fill:false
                }]
           },
           data2:{
            labels: ['Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
           datasets: [{
            label: 'data viz',
            backgroundColor: '#800000',
            borderColor: '#DC143C',
            data: [39.4,21.19,18.12,47.67,19.08,22.17,25.09]
            }]   

        }
    }

    }
    render(){
        return(
        <div className="App">
            <div className ="shadow" id="bak">
            <h4 className="card-header"> Le nombre d'utilisateurs<span class="tag tag-success" id="nbre-tag"><span class="vert"> 1056</span></span></h4> 
            </div>
            <div className ="shadow" id="bak">
            <h4 className="card-header"> Le taux de connextion<span class="tag tag-success" id="nbre-tag"><span class="vert"> 0.30% </span></span></h4> 
            </div>
            <div className ="shadow" id="bak">
                <Line data={this.state.data1}
                options={{
                    title:{
                        display:true,
                        text:"Evolution du nombre d'utilisateurs par jour",
                        fontSize:20
                    }

                }}
                />
            </div>
            <div className ="shadow" id="bak" >
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
export default FewnuChart;
