(function () {

      // Chart Bar Stacked
      const chartBarStacked = document.querySelector('#chartBarStacked');
      if (chartBarStacked) {
        new Chart(chartBarStacked, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'],
            datasets: [{
              data: [4000, 4500, 4900, 5500, 4500, 4100, 5000],
              backgroundColor: '#0049fa',
              hoverBackgroundColor: '#0049fa',
              borderColor: '#0049fa',
              categoryPercentage: .5,
              maxBarThickness: '20'
            },
            {
              data: [-4500, -4300, -4820, -4040, -4690, -3900, -4000],
              backgroundColor: '#e3ebf6',
              hoverBackgroundColor: '#e3ebf6',
              borderColor: '#e3ebf6',
              categoryPercentage: .5,
              maxBarThickness: '20'
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
                gridLines: {
                  color: '#e3ebf6',
                  drawBorder: false,
                  zeroLineColor: '#e3ebf6',
                  borderDash: [8, 4],
                  zeroLineBorderDash: [8,4]
                },
                ticks: {
                  beginAtZero: true,
                  stepSize: 1000,
                  fontSize: 12,
                  fontColor: '#64748b',
                  fontFamily: 'Inter, sans-serif',
                  padding: 10,
                  stepSize: 2000
                }
              }],
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  fontSize: 12,
                  fontColor: "#64748b",
                  fontFamily: "Inter, sans-serif",
                  padding: 5
                }
              }]
            }
          }
        });
      }

})();