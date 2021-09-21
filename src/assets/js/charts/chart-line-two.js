(function () {

  // Line Charts used on dashboard page

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


})();