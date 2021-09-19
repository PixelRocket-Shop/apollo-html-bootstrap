import Chart from 'chart.js';

(function () {


  // Number of orders chart
  const chartMonthlyIncome = document.querySelector('#chartMonthlyIncome');
  if (chartMonthlyIncome) {
    new Chart(chartMonthlyIncome, {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [{
          data: [10, 35, 4, 20, 44, 22, 52, 12, 23, 45, 56, 76, 43, 9, 32, 54, 60, 33, 54, 80],
          borderColor: '#0049fa',
          fill: false,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            bottom: 5
          }
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

    // Number of refunds chart
    const chartNumRefunds = document.querySelector('#chartNumRefunds');
    if (chartNumRefunds) {
      new Chart(chartNumRefunds, {
        type: 'line',
        data: {
          labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
          datasets: [{
            data: [10, 35, 4, 20, 44, 22, 52, 12, 23, 45, 56, 76, 43, 9, 32, 54, 60, 33, 54, 80],
            borderColor: '#0049fa',
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 5,
              bottom: 5
            }
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

  // Average Orders chart
  const chartAvgOrders = document.querySelector('#chartAvgOrders');
  if (chartAvgOrders) {
    new Chart(chartAvgOrders, {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [{
          data: [10, 35, 4, 20, 44, 22, 52, 12, 23, 45, 56, 76, 43, 9, 32, 54, 60, 80, 54, 23],
          borderColor: '#0049fa',
          fill: false,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            bottom: 5
          }
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

  // Pageviews chart
  const chartPageviews = document.querySelector('#chartPageviews');
  if (chartPageviews) {
    new Chart(chartPageviews, {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [{
          data: [10, 35, 4, 20, 44, 22, 52, 12, 23, 45, 56, 76, 43, 9, 32, 54, 60, 60, 60, 60],
          borderColor: '#0049fa',
          fill: false,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            bottom: 5
          }
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

    // Yearly Income chart
    const chartYearlyIncome = document.querySelector('#chartYearlyIncome');
    if (chartYearlyIncome) {
      var ctx = document.getElementById('chartYearlyIncome').getContext("2d")
      var gradient = ctx.createLinearGradient(0, 0, 0, 230)
      gradient.addColorStop(0, 'rgba(129,164,248, 0.08)')
      gradient.addColorStop(1, 'rgba(255,255,255, 0.2)')
      new Chart(chartYearlyIncome, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [{
            data: [4000, 4500, 4900, 5500, 4500, 4100, 4000, 3000, 5250],
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
            borderDash: [8,8]
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
                padding: 10
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

        // Monthly Expenses chart
        const chartMonthlyExpenses = document.querySelector('#chartMonthlyExpenses');
        if (chartMonthlyExpenses) {
          new Chart(chartMonthlyExpenses, {
            type: 'doughnut',
            data: {
              labels: ['USD', 'USD', 'USD'],
              datasets: [{
                data: [45, 25, 30],
                backgroundColor: ['#0049fa', '#0dcaf0', '#e3ebf6'],
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