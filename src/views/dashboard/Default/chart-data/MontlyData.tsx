// ==============================|| DASHBOARD - TOTAL GROWTH LINE CHART ||============================== //

const monthlyData = {
    height: 300,
    type: 'line', // Change chart type to 'line'
    options: {
        chart: {
            id: 'line-chart', // Update chart ID for line chart
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Months', // Title for the x-axis
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#6c757d' // Customize the title style as needed
                }
            }
        },
        legend: {
            show: true,
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        stroke: {
            show: true,
            curve: 'smooth', // Smooth lines
            width: 2 // Line width
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Investment',
            data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
        }
      
    ]
};
export default monthlyData;
