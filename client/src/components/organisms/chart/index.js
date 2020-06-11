import React from 'react';
import Highcharts from 'highcharts';
import get from 'lodash.get';
import map from 'lodash.map';
import HighchartsReact from 'highcharts-react-official';

const getConfig = (data, hideVoteNewsList) => {
    var categores = [];
    var points = [];
    map(data, (value) => {
        if(!get(hideVoteNewsList[value.objectID], 'hide')){
            categores.push(value.objectID);
            var count  =get(hideVoteNewsList[value.objectID], 'votes', 0)
            points.push(value.points + count);
        }
    })
    return {
    chart: {
        type: 'line',
        backgroundColor: '#eee',
    },
    title: {
        text: '',
    },
    credits: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
    yAxis: {
        title: {
            text: 'Votes'
        }
    },
    xAxis: {
        title: {
            text: 'ID'
        },
        categores: categores,
        labels: {
            formatter: function(){
               return categores[this.value];
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },

    series: [{
        data: points,
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }};
};


const LineChart = ({ data, hideVoteNewsList }) => {
    const chartOptions = getConfig(data, hideVoteNewsList);
    return(<HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
    >

    </HighchartsReact>)
}

export default LineChart;