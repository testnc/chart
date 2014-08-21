$(function(){
    var data = [
        {
            name : '北京',
            value:[400,380,350,330,200,185],
            color:'#1f7e92',
            line_width:3
        }
    ];
    var chart = new iChart.LineBasic2D({
        render : 'canvasDiv',
        data: data,
        title : '报销单审核时效/借款单审核时效',
        width : 800,
        height : 400,
        coordinate:{height:'90%',background_color:'#f6f9fa'},
        sub_option:{
            hollow_inside:false,//设置一个点的亮色在外环的效果
            point_size:16
        },
        labels:["张A","张B","张C","张D","张E","张F"]
    });
    chart.draw();
});