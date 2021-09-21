(function () {

    // Chart Line
    const chartLine = document.querySelector('#chartLine');
    if (chartLine) {
      var ctx = document.getElementById('chartLine').getContext("2d")
      var gradient = ctx.createLinearGradient(0, 0, 0, 230)
      gradient.addColorStop(0, 'rgba(129,164,248, 0.08)')
      gradient.addColorStop(1, 'rgba(255,255,255, 0.2)')
      new Chart(chartLine, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [{
            data: [4000, 4500, 4900, 5500, 4500, 4100, 4000, 5000],
            borderColor: '#0049fa',
            backgroundColor: gradient,
            // backgroundColor: 'rgba(129,164,248, 0.2)',
            pointRadius: 6,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 3,
            borderWidth: 2,
          },
          {
            data: [2500, 5700, 2820, 4040, 5690, 2900, 2500, 5000, 4000],
            borderColor: '#e3ebf6',
            borderWidth: 2,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cornerRadius: 2,
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
                stepSize: 1000
              }
            }],
            xAxes: [{
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