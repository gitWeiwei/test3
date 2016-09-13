
$(function () {
    var winH = $(window).height();
    $("#info_report").height(winH * 705 / 705);
    $(".shadow").height(winH * 705 / 705);//报告明细表
    $(".report_details").height(winH * 321 / 705);
   // $(".rep_head").height(winH * 40 / 705);
    $(".rep_content").height(winH * 245 / 705);
    

    $("#info_report .chart").height(winH * 319 / 705);
    $(".chart  .chart_content").height(winH * 277 / 705);
    $("#chart1").height(winH * 267 / 705);
    $(".ui-state-default").height(winH * 267 / 705);
    $("#chart1 table").height(winH * 267 / 705);
    $(".rep_table").height(winH * 185 / 705);
    $(".single_checklist").height(winH * 166 / 705);
    $(".single_content").height(winH * 126 / 705); 
   
    $("#line_iframe").height(winH * 260 / 705);
    $("#line_iframe2").height(winH * 280 / 705);
    $(".highcharts-background").height(winH * 200 / 705);

    $(" #chart_iframe").height(winH * 260 / 705);
    $(".highcharts-background").height(winH * 200 / 705);




});
