import React from "react";
import Plot from 'react-plotly.js';
import dataSeries from './dataseries';


console.log("--Ydata--",dataSeries)

class TimeChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          chartXAxisData:dataSeries.xAxisData,
          chartYAxisData:dataSeries.yAxisData,
          intervalId:0,
          revisionNo:1
      }

      this.handleOnClick = this.handleOnClick.bind(this)
    }



    handleOnClick(e){
      console.log(e.points)
      let xVal = e.points[0].x
      let yVal = e.points[0].y
      console.log("X and Y values ",xVal,yVal)
      this.props.handleChartData(xVal,yVal)
    }

    render() {
        return(
          <>
            <Plot
            data={[
              {
                x: this.props.chartXAxisData,
                y: this.props.chartYAxisData,
                type: 'scatter'
              }
            ]}
            layout={ {width: 1000, height: 400, title: 'A Time Series Plot',hovermode:'closest',uirevision:true} }
            onClick={(e) => this.handleOnClick(e)}
          />
          </>
        )

    }
}

export default TimeChart