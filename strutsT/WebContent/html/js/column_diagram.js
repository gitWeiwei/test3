
$(document).ready(function () {



    var chart = {
        type: 'column'
    };
    var title = {
        text: '堆叠柱形图'
    };
    var xAxis = {
        categories: ['LT04', 'LT05', 'LT06'],
        title: {
            text:'磁带类型'
        }
    };
    var yAxis = {
        min: 0,
        title: {
            text: '数量'
        }
    };
    var legend = {
        align: 'right',
        x: -10,
        verticalAlign: 'top',
        y: 1,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: 'transparency',//提示的边框色
        borderWidth: 0,
        shadow: false
    };
    var tooltip = {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
               this.series.name + ': ' + this.y + '<br/>' +
               'Total: ' + this.point.stackTotal;
        }
    };
    var plotOptions = {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'transparent',//柱子上字体的颜色
                style: {
                    textShadow: '0 0 3px transparent'
                }
            }
        }
    };

    var credits = {
        enabled: false
    };
    var series = [{
        name: '高危',
        data: [5, 3, 4],
        color: '#E2214E'
        

    }, {
        name: '危险',
        data: [2, 7, 3],
        color: '#F7B52B'
    }, {
        name: '只读',
        data: [3, 4, 4],
        color: '#0749C3'
    }, {
        name: '健康',
        data: [3, 4, 4],
        color: '#66FE17'
    }];

    var json = {};
    json.chart = chart;//如果注释了就是折线图
    json.title = title;
    json.xAxis = xAxis;//x,y轴
    json.yAxis = yAxis;
    json.legend = legend;
    json.tooltip = tooltip;
    json.plotOptions = plotOptions;
    json.credits = credits;
    json.series = series;
    $('.container').highcharts(json);

});