$(function () {
    var data = [
        {
            name: '在手待复核量',
            value: [0, 0, 0, 0, 9, 0, 22],
            color: '#db6086'
        },
        {
            name: '在手待审核量',
            value: [130, 140, 150, 155, 160, 180, 200],
            color: '#47b2c8'
        }
    ];

    var chart = new iChart.BarMulti2D({
        render: 'canvasDiv',
        data: data,
        labels: ["张三", "李四", "王五", "赵六", "孙七", "宋八", "姜九"].reverse(),
        title: {
            text: '',
            color: '#585757'
        },
        subtitle: {
            text: '',
            color: '#797373'
        },
        footnote: '',
        width: 800,
        height: 400,
        background_color: '#ffffff',
        legend: {
            enable: true,
            background_color: null,
            border: {
                enable: false
            }
        },
        coordinate: {
            scale: [
                {
                    position: 'bottom',
                    start_scale: 0,
                    end_scale: 200,
                    scale_space: 50
                }
            ],
            background_color: null,
            axis: {
                width: 0
            },
            width: 600,
            height: 260
        }
    });
    chart.draw();
});