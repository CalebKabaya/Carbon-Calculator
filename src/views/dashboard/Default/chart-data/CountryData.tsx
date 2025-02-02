// ==============================|| DASHBOARD - TOTAL GROWTH BAR CHART ||============================== //

const countryData = {
    height: 350,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
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
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Malawi', 'South Sudan', 'Mozambique', 'DRC']
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
            name: 'Scope 1',
            data: [35, 125, 35, 35, 35, 80, 35, 20]
        },
        {
            name: 'Scope 2',
            data: [35, 15, 15, 35, 65, 40, 80, 25]
        },
        {
            name: 'Scope 3',
            data: [35, 145, 35, 35, 20, 105, 100, 10]
        },
       
    ]
};
export default countryData;
