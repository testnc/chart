$(function () {
    var data = [
        {name: '张三', value: 180, color: '#bc6666'},
        {name: '李四', value: 160, color: '#cbab4f'},
        {name: '王五', value: 140, color: '#76a871'},
        {name: '赵六', value: 130, color: '#9f7961'},
        {name: '孙七', value: 120, color: '#2ba5a4'},
        {name: '宋八', value: 135, color: '#6f83a5'},
        {name: '姜九', value: 80, color: '#565656'}
    ];

    new iChart.Column3D({
        render: 'canvasDiv',
        data: data,
        title: '审核业务量/复核业务量',
        width: 800,
        height: 400,
        align: 'left',
        offsetx: 50,
        legend: {
            enable: true
        },
        sub_option: {
            label: {
                color: '#111111'
            }
        },
        coordinate: {
            width: 600,
            scale: [
                {
                    position: 'left',
                    start_scale: 0,
                    end_scale: 200,
                    scale_space: 50,
                    listeners: {
                        parseText: function (t, x, y) {
                            console.log(t + ";" + x + ":" + y);
                            return {text: t}
                        }
                    }
                }
            ]
        }
    }).draw();
});