import React from 'react';
import Highcharts from 'highcharts';
import map from 'lodash.map';
import HighchartsReact from 'highcharts-react-official';

const getConfig = (data) => {
    var categores = [];
    var points = [];
    map(data, (value) => {
        categores.push(value.id);
        points.push(value.num_comments);
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
        categores: categores
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
            pointStart: 2010
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


const LineChart = (data) => {
    const chartOptions = getConfig(data);
    return(<HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
    >

    </HighchartsReact>)
}

export default LineChart;