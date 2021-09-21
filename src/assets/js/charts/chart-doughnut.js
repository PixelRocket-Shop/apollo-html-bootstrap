(function () {

    // Chart Doughnut
    const chartDoughnut = document.querySelector('#chartDoughnut');
    if (chartDoughnut) {
      new Chart(chartDoughnut, {
        type: 'doughnut',
        data: {
          labels: ['USD', 'USD', 'USD'],
          datasets: [{
            data: [45, 25, 30],
            backgroundColor: ['#0049fa', '#ffd500', '#e3ebf6'],
            borderWidth: 10,
            hoverBorderColor: '#fff'
          }]
        },
        options: {
          responsive: true,
          cutoutPercentage: 70,
          maintainAspectRatio: false,
          tooltips: {
            enabled: false
          },
          hover: {
            mode: null
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          }
        }
      });
    }

})();