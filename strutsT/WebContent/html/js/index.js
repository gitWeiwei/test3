$(function () {
    var winH = $(window).height();
    $("#lf-box").height(winH * 284 / 765);
    $("#lf-btn").height(winH * 50 / 765);

    $("#container").height(winH * 765 / 765);
    $("#header").height(winH * 60 / 765);
    $("#main").height(winH * 705 / 765);
    $("#aside").height(winH * 705 / 765);
    $("#content").height(winH * 705 / 765);
    $("#header img").height(winH * 40 / 765);
    $("#header .lock img").height(winH * 16 / 765);
   
    $("li .head-icon").height(winH * 24/ 765);
    $("#header ul").height(winH * 60 / 765);
    $("#header ul li").height(winH * 30 / 765);
    $(".guide .switchbox").height(winH * 29 / 765);
    $("#header ul .check").height(winH * 71 / 765);
    $("#header ul li .sel").height(winH * 14 / 765);
    $("#header ul li .sel2").height(winH * 14 / 765);
    $("#header ul .rep").height(winH * 71 / 765);
    $("#header ul .pro").height(winH * 71 / 765);
    $("#header ul .print").height(winH * 71 / 765);
   

    $("#content #nav-btn").height(winH * 38 / 765);
    $("#indexList").height(winH * 705 / 765);
    $("#indexList header").height(winH * 40 / 765);
    $("#indexList section").height(winH * 790 / 765);
    $("#fm2").height(winH * 790 / 765);
    $("#scroll").height(winH * 740 / 765);
    $("#service_items").height(winH * 139 / 765);/*2级子页面的下拉*/
    $("#service_items li").height(winH * 120 / 765);
    $("#service_items li a").height(winH * 120 / 765);
    $("#service_items li img").height(winH * 70 / 765);
    $("#service_items2").height(winH * 139 / 765);/*2级子页面的下拉*/
    $("#service_items2 li").height(winH * 120 / 765);
    $("#service_items2 li a").height(winH * 120 / 765);
    $("#service_items2 li img").height(winH * 70 / 765);
    $("#system").height(winH * 139 / 765); /*2级子页面的下拉*/
    $("#system li").height(winH * 120 / 765);
    $("#system li a").height(winH * 120 / 765);
    $("#system li img").height(winH * 70 / 765);
    $("#report_forms").height(winH * 139 / 765);/*2级子页面的下拉*/
    $("#report_forms li").height(winH * 120 / 765);
    $("#report_forms li a").height(winH * 120 / 765);
    $("#report_forms li img").height(winH * 70 / 765);

    $("#content-list").height(winH * 740 / 765);
    $(".table tr").height(winH * 40 / 765);
    $("#iframe").height(winH * 705 / 765);
    $("#iframe2").height(winH * 705 / 765);
    $("#zhezhao").height(winH * 705 / 765);
    $(".detection-box").height(winH * 454 / 765);
    $(".detection-box .dete-head  img").height(winH * 41 / 765);
    $(".detection-box .detection-con").height(winH * 406 / 765);
    $(".detection-con  ul").height(winH * 328 / 765);
    $(".detection-con  ul li").height(winH * 328 / 765);
    $(".detection-con .check").height(winH * 220 / 765);
    $(".detection-con .basecheck").height(winH * 30 / 765);
    $(".detection-con .normcheck").height(winH * 52 / 765);
    $(".detection-con .wholecheck").height(winH * 92 / 765);
    $(".shade").height(winH * 765 / 765);
	$(".shade").height(winH * 765 / 765);
});
//滑动效果
//遮罩层
function zhe() {
    document.getElementById('zhezhao').style.display = 'none';
}
//iframe2
function btn5() {
    document.getElementById('indexList-3').style.display = 'block';
    $("#zhezhao").show();
}
function btn1() {
    document.getElementById('indexList-3').style.display = 'none';
    document.getElementById('indexList').style.display = 'block';
    document.getElementById('zhezhao').style.display = 'none';
}
function btn2() {
    document.getElementById('indexList-3').style.display = 'none';
    document.getElementById('indexList').style.display = 'block';
    document.getElementById('zhezhao').style.display = 'none';
}
function btn3() {
    document.getElementById('indexList-3').style.display = 'none';
    document.getElementById('indexList').style.display = 'block';
    document.getElementById('zhezhao').style.display = 'none';
}
function btn4() {
    document.getElementById('indexList-3').style.display = 'none';
    document.getElementById('indexList').style.display = 'block';
    document.getElementById('zhezhao').style.display = 'none';
}
       

//左边按钮收缩
$("#cut").click(function () {
    if ($("#nav-btn")[0].style.display == "none") {
        $("#nav-btn").show(1000);
        $("#indexList").attr("style", "");
    } else {
        $("#nav-btn").hide(1000);
        $("#indexList").attr("style", "width:100%");
    }
});
//左侧的弹框
$("#lf-box").hide();
var view = document.getElementById("lf-btn");
var lfbox = document.getElementById("lf-box");
view.onmouseover = function () {
    if (lfbox.style.display === "none") {
        lfbox.style.display = "block";
    }
}
view.onmouseleave = function () {
    toolTipBoxHide1();
}
function toolTipBoxHide1() {
    if (lfbox.style.display === "block") {
        lfbox.style.display = "none";
    }
}
$("#lf-box").mouseover(function () {
    $("#lf-box").show();
    lfbox.style.display = "block";
});
$("#lf-box").mouseleave(function () {
    $("#lf-box").hide();
});
//顶部下拉的效果--检测
$("#service_items").hide();
var ho = document.getElementById("check");
var box = document.getElementById("service_items");
ho.onmouseover = function () {
    if (box.style.display === "none") {
        box.style.display = "block";
    }
}
ho.onmouseleave = function () {
    if (box.style.display === "block") {
        box.style.display = "none";
    }
}

$("#service_items").mouseover(function () {
    $("#service_items").show();
    box.style.display = "block";
});
$("#service_items").mouseleave(function () {
    $("#service_items").hide();
});
//顶部下拉的效果--
$("#report_forms").hide();
var rep = document.getElementById("rep");
var report = document.getElementById("report_forms");
rep.onmouseover = function () {
    if (report.style.display === "none") {
        report.style.display = "block";
    }
}
rep.onmouseleave = function () {
    if (report.style.display === "block") {
        report.style.display = "none";
    }
}
$("#report_forms").mouseover(function () {
    $("#report_forms").show();
    report.style.display = "block";
});
$("#report_forms").mouseleave(function () {
    $("#report_forms").hide();
});
//顶部下拉的效果--
$("#system").hide();
var pro = document.getElementById("pro");
var system = document.getElementById("system");
pro.onmouseover = function () {
    if (system.style.display === "none") {
        system.style.display = "block";
    }
}
pro.onmouseleave = function () {
    if (system.style.display === "block") {
        system.style.display = "none";
    }
}
$("#system").mouseover(function () {
    $("#system").show();
    system.style.display = "block";
});
$("#system").mouseleave(function () {
    $("#system").hide();
});
//顶部下拉的效果--打印
$("#service_items2").hide();
var ho2 = document.getElementById("print");
var box2 = document.getElementById("service_items2");
ho2.onmouseover = function () {
    if (box2.style.display === "none") {
        box2.style.display = "block";
    }
}
ho2.onmouseleave = function () {
    toolTipBoxHide();
}
function toolTipBoxHide() {
    if (box2.style.display === "block") {
        box2.style.display = "none";
    }
}
$("#service_items2").mouseover(function () {
    $("#service_items2").show();
    box2.style.display = "block";
});
$("#service_items2").mouseleave(function () {
    $("#service_items2").hide();
});



//开关
$(function () {
    $('.switch').hide();
    $('.guide').click(function (e) {
        $('.switch').toggle();
        $(document).one('click', function () {
            $('.switch').hide();
        })
        e.stopPropagation();
    });
   
    $('.switch>div').each(function (e) {
        $(this).click(function (e) {
            var text = $(this).html();
            if (text == "开") {
                $('.on').addClass("bj");
                $('.on').attr("style","color:#fff;");
                $('.off').removeClass("bj");
                $('.off').attr("style", "color:#000;");
              
                $('.detection-box').show();
                $('.shade').show();
            } else {
                $('.off').addClass("bj");
                $('.on').removeClass("bj");
                $('.off').attr("style", "color:#fff;");
                $('.on').attr("style", "color:#000;");
                $('.detection-box').hide();
                $('.shade').hide();
            }
            $(document).one('click', function () {
                $('.switch').hide();
            })
            e.stopPropagation();
        })
        $('.switch').on('click', function (e) {
            e.stopPropagation();
        })

    })
   
   
})

//关闭

$(function () {
    $('.dete-head img').click(function () {
        $('.detection-box').hide();
        $('.shade').hide();
    })
})
//选中下拉的其中一个，背景变色

$(function () {
    //打印
    $('#service_items2>li a span').each(function () {
        var html = $(this).html();
        //.back的点击事件
        $(this).parent().click(function () {
            //除当前选择，其它全部移除背景
            $('#service_items2>li a span').each(function () {
                var sixhtml = $(this).html();
                if (html == sixhtml) {
                    $(this).parent().addClass("sel_bg");
                } else {
                    $(this).parent().removeClass("sel_bg");

                }
            })
        })
    })
    //检测
    $('#service_items>li a  ').each(function () {
        var html = $(this).html();
        //.back的点击事件
        $(this).parent().click(function () {
            //除当前选择，其它全部移除背景
            $('#service_items>li a ').each(function () {
                var sixhtml = $(this).html();
                if (html == sixhtml) {
                    $(this).parent().addClass("sel_bg");
                } else {
                    $(this).parent().removeClass("sel_bg");
                }
            })
        })
    })
    //统计报表
    $('#report_forms>li a  span').each(function () {
        var html = $(this).html();
        //.back的点击事件
        $(this).parent().click(function () {
            //除当前选择，其它全部移除背景
            $('#report_forms>li a span').each(function () {
                var sixhtml = $(this).html();
                if (html == sixhtml) {
                    $(this).parent().addClass("sel_bg");
                } else {
                    $(this).parent().removeClass("sel_bg");
                }
            })
        })
    })
    //系统维护
    $('#system>li a  span').each(function () {
        var html = $(this).html();
        //.back的点击事件
        $(this).parent().click(function () {
            //除当前选择，其它全部移除背景
            $('#system>li a span').each(function () {
                var sixhtml = $(this).html();
                if (html == sixhtml) {
                    $(this).parent().addClass("sel_bg");
                } else {
                    $(this).parent().removeClass("sel_bg");
                }
            })
        })
    })
})
