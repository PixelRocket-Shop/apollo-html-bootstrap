import Chart from 'chart.js';

(function () {


  // Number of orders chart
  const chartNumOrders = document.querySelector('#chartNumOrders');
  if (chartNumOrders) {
    new Chart(chartNumOrders, {
      type: 'line',
      data: {
        labels: ['1st June', '2nd June', '3rd June', '4th June', '5th June', '6th June', '7th June'],
        datasets: [{
          data: [10, 35, 4, 20, 44, 22, 52],
          borderColor: '#19b8a2',
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
          labels: ['1st June', '2nd June', '3rd June', '4th June', '5th June', '6th June', '7th June'],
          datasets: [{
            data: [10, 35, 4, 20, 44, 22, 52],
            borderColor: '#19b8a2',
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
        labels: ['1 June', '2 June', '3 June', '4 June', '5 June'],
        datasets: [{
          data: [40, 24, 15, 22, 9],
          borderColor: '#db1a2a',
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
        labels: ['1 June', '2 June', '3 June', '4 June', '5 June', '6 June', '7 June', '8 June', '9 June', '10 June', '11 June', '12 June', '13 June', '14 June', '15 June'],
        datasets: [{
          data: [20, 21, 23, 22, 22, 55, 65, 3, 2, 33, 45, 22, 22, 22, 22],
          borderColor: '#0dcaf0',
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
      new Chart(chartYearlyIncome, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [{
            data: [4000, 4500, 4900, 5500, 4500, 4100, 4000, 5000, 5250],
            backgroundColor: '#794cff',
            hoverBackgroundColor: '#794cff',
            borderColor: '#794cff',
            categoryPercentage: .3,
            maxBarThickness: '8'
          },
          {
            data: [4500, 4300, 4820, 4040, 4690, 3900, 4000, 5000, 4000],
            backgroundColor: '#e3ebf6',
            hoverBackgroundColor: '#e3ebf6',
            borderColor: '#e3ebf6',
            categoryPercentage: .3,
            maxBarThickness: '8'
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
                zeroLineColor: '#e3ebf6'
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1000,
                fontSize: 12,
                fontColor: '#64748b',
                fontFamily: 'Open Sans, sans-serif',
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
                fontFamily: "Open Sans, sans-serif",
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
                backgroundColor: ['#794cff', '#0dcaf0', '#e3ebf6'],
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