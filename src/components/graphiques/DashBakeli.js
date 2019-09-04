import React,{Component} from 'react';
import {Pie, Bar, Line, Doughnut} from 'react-chartjs-2';
class BakeliChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data1:{
                labels: ['Payés', 'Non Payés'],
               datasets: [{
                label: 'data viz',
                backgroundColor: ['teal','	#FF1493'],
                borderColor: 'black',
                data: [17.30,82.70]
                }]
           },
           data2:{
            labels: ['08h-13h', '09h-13h','13h-18h','08h-18h','17h30-19h30'],
           datasets: [{
            label: 'data viz',
            backgroundColor: '#20B2AA',
            borderColor: 'black',
            data: [115,5,70,28,4]
            }]
       },
       data3:{
        labels:['ComitLab','Djaale','Tex Courrier','ShopMeAway'],
        datasets:[{
        label:'data viz',
        backgroundColor:['navy','fuchia','#2F4F4F','teal'],
        data:[3, 2,2,19]
         }]
   }
        }
    }
    render(){
        return(
        <div className="App">
            <div class="shadow" id="bak">
                     <h4 class="card-header"> le nombre de candidats <span class="tag tag-success" id="nbre-tag"><span class="vert"> 345</span></span></h4>
            </div>
            <div className="shadow" id="bak">
                <h4 className="card-header"> Le taux de reussite <span className="tag tag-success" id="nbre-tag"> <span className="vert">0.18%</span></span></h4>
            </div>
            <div class="shadow"id="bak">
                <Pie data={this.state.data1}
                options={{
                    title:{
                        display:true,
                        text:'taux du nombre de candidats payés et non payés aux tests',
                        fontSize:20
                    }
                }} />
            </div>
            <div className="shadow"id="bak" >
                <Bar data={this.state.data2}
                options={
                    {
                        title:{
                            display:true,
                            text:'Le nombre de stagiaires par créneau horaire',
                            fontSize:20
                        }
                    }
                }
                />
            </div>
            <div  className="shadow"id="bak">
                <Pie data={this.state.data3}
                options={{
                    title:{
                        display:true,
                        text:'Le nombre de stagiaires placés par client',
                        fontSize:20
                    }
                }}
                 />
            </div>    
         </div>

        );
    }
}
export default BakeliChart;