import React,{Component} from 'react';
import {polarArea,Pie} from 'react-chartjs-2';
class ElikiaChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                labels: ['montant alloués', 'montant sollicités'],
               datasets: [{
                label: 'data viz',
                backgroundColor: ['#6a5acd','#ff6347'],
                borderColor: '#708090',
                data: [300000,400000]
                }]
           }
        }
    }
    render(){
        return(
            <div className="App">
                <div className="shadow" id="bak">
                <h4 className="card-header"> Le nombre de porteurs de projets<span className="tag tag-success" id="nbre-tag"><span className="vert"> 25</span></span></h4> 
                </div>
                <div className="shadow" id="bak">
                <h4 className="card-header"> Le taux de validation <span className="tag tag-success" id="nbre-tag"><span className="vert"> 0.24</span></span></h4>
                </div>
                <div className="shadow" id="bak">
                <h4 className="card-header"> Le nombre d'investisseurs <span className="tag tag-success" id="nbre-tag"><span className="vert"> 14</span></span></h4>
                </div>
                <div className="shadow" id="bak">
                    <Pie data={this.state.data}
                    options={{
                        title:{
                            display:true,
                            text:"Le montant alloués et sollicités",
                            fontSize:20
                        }
                    }}
                    />

                </div>
            </div>
        );
    }
}
export default ElikiaChart;