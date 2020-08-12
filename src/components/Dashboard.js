import React from "react";
import TimeChart from './TimeSeriesChart'
import DetailsPanel from './DetailsPanel'
import Grid from '@material-ui/core/Grid';
import dataSeries from './dataseries';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          chartXAxisData:[],
          chartYAxisData:[],
          intervalId:0,
          revisionNo:1,
          panelData:{}
      }
      this.setChartData = this.setChartData.bind(this)
      this.handleChartData = this.handleChartData.bind(this)
    }

    componentDidMount() {
        this.setState({chartXAxisData:dataSeries.xAxisData,chartYAxisData:dataSeries.yAxisData})
        this.intervalId = setInterval(this.setChartData.bind(this), 15000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handleChartData(xVal,yVal){
        this.setState({panelData:{xVal:xVal,yVal:yVal}})
    }
  
    setChartData(){
          const ARRAY_LENGTH = 100
          let XrandomeArr = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.random())
          let YrandomeArr = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.floor(Math.random() * 6000000) + 1)
          console.log("XRandom -->",XrandomeArr)
          console.log("YRandom -->",YrandomeArr)
          this.setState((prevState, props) => {
            return { revisionNo: prevState.revisionNo + 1,chartXAxisData:dataSeries.xAxisData,chartYAxisData:YrandomeArr };
          });
    }

    render() {
        return(
            <>
            <Grid>
                <Grid item xs={10} sm={10}>
                    <TimeChart chartXAxisData={this.state.chartXAxisData} chartYAxisData={this.state.chartYAxisData}
                     handleChartData={this.handleChartData}
                     revisionNo={this.state.revisionNo}/>
                </Grid>
                <Grid item xs={10} sm={12} style={{marginTop: '40px'}}>
                     <DetailsPanel data={this.state.panelData}/>
                </Grid>
            </Grid>
           
           
            </>
        )

    }
}

export default Dashboard