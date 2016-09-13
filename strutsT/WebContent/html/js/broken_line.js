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
            text:'保存时间'
        }
    };
    var yAxis = {
        min: 0,
        title: {
            text: '数量'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'transparent'//柱子顶部的数字
            }
        }
    };
    var legend = {
        align: 'right',
        x: -15,
        verticalAlign: 'top',
        y: 0,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: 'transparency',//提示的边框色
        borderWidth: 1,
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
        data: [5, 3, 4]
    }, {
        name: '危险',
        data: [2, 2, 3]
    }, {
        name: '只读',
        data: [3, 4, 4]
    }, {
        name: '健康',
        data: [2, 1, 3]
    }];

    var json = {};
    //json.chart = chart;//如果注释了就是折线图
    json.title = title;
    json.xAxis = xAxis;//x,y轴
    json.yAxis = yAxis;
    json.legend = legend;
    json.tooltip = tooltip;
    json.plotOptions = plotOptions;
   json.credits = credits;
    json.series = series;
    $('.broken_line').highcharts(json);

});