var distributionChartConfig = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                4.2,
                2.8
            ],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Masternodes",
            "Staking"
        ]
    },
    options: {
        responsive: true
    }
};

$(function() {
    var ctx = document.getElementById('distribtution-chart').getContext('2d')
    distributionPieChart = new Chart(ctx, distributionChartConfig)
})