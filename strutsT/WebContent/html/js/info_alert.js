
$(function () {
    var winH = $(window).height();
    $("#container").height(winH * 250 / 705);
    $("#pie_iframe1").height(winH * 265 / 705);
    $("#pie_iframe2").height(winH * 265 / 705);
    $("#pie_iframe3").height(winH * 265 / 705);
    $("#pie_iframe4").height(winH * 265 / 705);
    $(".health_list").height(winH * 327 / 705);
    $(".health_head").height(winH * 40 / 705);//
    $(".health_head img").height(winH * 40 / 705);
    $(".type_content").height(winH * 287 / 705);
    $(".type_list").height(winH * 327 / 705);
    $(".type_head").height(winH * 40 / 705);//
    $(".type_head img").height(winH * 40 / 705);
    $(".unit_list").height(winH * 327 / 705);
    $(".unit_head").height(winH * 40 / 705);//
    $(".unit_head img").height(winH * 40 / 705);
    $(".unit_content").height(winH * 287 / 705);
    $(".scroll").height(winH * 265 / 705);


    //遮罩层
    $('.shadow').hide();
    //报告明细表
    $('.health_list').hide();
    $('.type_list').hide();
    $('.unit_list').hide();
    //健康状况饼图
 
    $("#container_1  .highcharts-series > path:nth-child(1)").click(function () {
    	alert();
        $('.health_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.health_head span', window.parent.document).html('高危磁带生产厂家占比表');
    });
    $("#container_1  .highcharts-series > path:nth-child(2)").click(function () {
        $('.health_list', window.parent.document).show()
        $('.shadow', window.parent.document).show();
        $('.health_head span', window.parent.document).html('危险磁带生产厂家占比表');
    });
    $("#container_1  .highcharts-series > path:nth-child(3)").click(function () {
        $('.health_list', window.parent.document).show()
        $('.shadow', window.parent.document).show();
        $('.health_head span', window.parent.document).html('只读磁带生产厂家占比表');
    });
    $("#container_1  .highcharts-series > path:nth-child(4)").click(function () {
        $('.health_list', window.parent.document).show()
        $('.shadow', window.parent.document).show();
        $('.health_head span', window.parent.document).html('健康磁带生产厂家占比表');
    });
    //保存磁带类型
    $("#container_2 .highcharts-series > path:nth-child(1)").click(function () {
        $('.type_list', window.top.document).show();
        $('.shadow', window.top.document).show();
        $('.type_head span', window.parent.document).html('LTO4磁带类型比例');
    });
    $("#container_2  .highcharts-series > path:nth-child(2)").click(function () {
        $('.type_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.type_head span', window.parent.document).html('LTO5磁带类型比例');
    });
    $("#container_2 .highcharts-series > path:nth-child(3)").click(function () {
        $('.type_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.type_head span', window.parent.document).html('LTO6磁带类型比例');
    });

    //磁带制造商
    $("#container_3 .highcharts-series > path:nth-child(1)").click(function () {
        $('.type_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.type_head span', window.parent.document).html('富士磁带随时间变化情况');
        $('.type_head span', window.parent.document).html('富士磁带随时间变化情况');
    });
    $("#container_3  .highcharts-series > path:nth-child(2)").click(function () {
        $('.type_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.type_head span', window.parent.document).html('M磁带随时间变化情况');
    })
    $("#container_3 .highcharts-series > path:nth-child(3)").click(function () {
        $('.type_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.type_head span', window.parent.document).html('S磁带随时间变化情况');
    })
    $("#container_3 .highcharts-series > path:nth-child(4)").click(function () {
        $('.type_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.type_head span', window.parent.document).html('..磁带随时间变化情况');
    })
    //磁带健康状况
    $("#container_4 .highcharts-series > path:nth-child(1)").click(function () {
        $('.unit_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.unit_head span', window.parent.document).html('A单位磁带类型健康状况表');
    })
    $("#container_4  .highcharts-series > path:nth-child(2)").click(function () {
        $('.unit_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.unit_head span', window.parent.document).html('B单位磁带类型健康状况表');
    })
    $("#container_4 .highcharts-series > path:nth-child(3)").click(function () {
        $('.unit_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.unit_head span', window.parent.document).html('C单位磁带类型健康状况表');
    })
    $("#container_4 .highcharts-series > path:nth-child(4)").click(function () {
        $('.unit_list', window.parent.document).show();
        $('.shadow', window.parent.document).show();
        $('.unit_head span', window.parent.document).html('D单位磁带类型健康状况表');
    })


    //关闭
    $('.health_head img').click(function () {
        $('.health_list').hide();
        $('.shadow').hide();
        $('.health_list', window.parent.document).hide()
        $('.shadow', window.parent.document).hide();
    });
    $('.type_head img').click(function () {
        $('.type_list').hide();
        $('.shadow').hide();
        $('.type_list', window.parent.document).hide()
        $('.shadow', window.parent.document).hide();
    });

    $('.unit_head img').click(function () {
        $('.unit_list', window.parent.document).hide()
        $('.shadow', window.parent.document).hide();
        $('.unit_list').hide();
        $('.shadow').hide();
    });

});