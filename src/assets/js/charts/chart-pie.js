(function () {

    // Chart Pie
    const chartPie = document.querySelector('#chartPie');
    if (chartPie) {
      new Chart(chartPie, {
        type: 'pie',
        data: {
          labels: ['USD', 'USD', 'USD'],
          datasets: [{
            data: [45, 25, 30],
            backgroundColor: ['#0049fa', '#e54370', '#0dcaf0'],
            borderWidth: 10,
            hoverBorderColor: '#fff'
          }]
        },
        options: {
          responsive: true,
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