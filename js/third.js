$(function () {
    var data = [
        {name: '已提取未处理', value: 1135, color: '#4572a7'},
        {name: '已提取已处理', value: 10200, color: '#aa4643'},
    ];


    var chart = new iChart.Pie3D({
        render: 'canvasDiv',
        data: data,
        title: {
            text: '',
            height: 40,
            fontsize: 30,
            color: '#282828'
        },
        footnote: {
            text: '',
            color: '#486c8f',
            fontsize: 12,
            padding: '0 38'
        },
        sub_option: {
            mini_label_threshold_angle: 40,//迷你label的阀值,单位:角度
            mini_label: {//迷你label配置项
                fontsize: 20,
                fontweight: 600,
                color: '#ffffff'
            },
            label: {
                background_color: null,
                sign: true,//设置禁用label的小图标
                padding: '0 4',
                border: {
                    enable: false,
                    color: '#666666'
                },
                fontsize: 11,
                fontweight: 600,
                color: '#4572a7'
            },
            border: {
                width: 2,
                color: '#ffffff'
            },
            listeners: {
                parseText: function (d, t) {
                    return d.get('value');//自定义label文本
                }
            }
        },
        legend: {
            enable: true,
            padding: 0,
            offsetx: -100,
            offsety: 50,
            color: '#3e576f',
            fontsize: 20,//文本大小
            sign_size: 20,//小图标大小
            line_height: 28,//设置行高
            sign_space: 10,//小图标与文本间距
            border: false,
            align: 'left',
            background_color: null//透明背景
        },
        shadow: true,
        shadow_blur: 6,
        shadow_color: '#aaaaaa',
        shadow_offsetx: 0,
        shadow_offsety: 0,
        background_color: '#f1f1f1',
        align: 'left',//右对齐
        offsetx: 50,//设置向x轴负方向偏移位置60px
        offset_angle: -90,//逆时针偏移120度
        width: 800,
        height: 400,
        radius: 150
    });
    //利用自定义组件构造右侧说明文本
    chart.plugin(new iChart.Custom({
        drawFn: function () {
            //在右侧的位置，渲染说明文字
            chart.target.textAlign('start')
                .textBaseline('top')
                .textFont('600 20px Verdana')
//                .fillText('Market Fragmentation:\nTop Mobile\nOperating Systems',120,80,false,'#be5985',false,24)
                .textFont('600 12px Verdana')
//                .fillText('Source:ComScore,2012',120,160,false,'#999999');
        }
    }));

    chart.draw();
});