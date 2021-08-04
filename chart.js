document.addEventListener("DOMContentLoaded", () => {
    drawChart("pie-group-services");
    drawChart("bar-group-statuses");
    drawChart("bar-group-months");
    drawChart("created-last-month");
});

const drawChart = (chartID) => {
    const ctx = document.getElementById(chartID).getContext('2d');
    var myChart = new Chart(ctx, chartConfig[chartID]);
}

const fillLastYear = () => {
    const data = [];
    for (let index = 0; index < 13; index++) {
        data.push(Math.round(Math.random() * 10) *  index * 10);
        
    }
    return data;
}

const chartConfig = {
    "pie-group-services": {
        type: 'pie',
        data: {
            labels: ['ATA', 'Certificate', 'Expertiza', 'Evaluare', 'AAIJ'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },

    "bar-group-statuses": {
        type: 'bar',
        data: {
            labels: ['ATA', 'Certificate', 'Expertiza', 'Evaluare', 'AAIJ'],
            datasets: [
              {
                label: 'Așteptare',
                data: [100, 50, 10, 15, 20],
                borderColor: "orange",
                backgroundColor: "orange",
              },
              {
                label: 'Confirmate',
                data: [30, 10, 10, 5, 11],
                borderColor: "red",
                backgroundColor: "blue",
              },
              {
                label: 'Achitate',
                data: [50, 20, 10, 15, 20],
                borderColor: "violet",
                backgroundColor: "violet",
              },
              {
                label: 'Finisate',
                data: [100, 50, 10, 15, 20],
                borderColor: "green",
                backgroundColor: "green",
              }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        },
    },
    "bar-group-months": {
        type: 'bar',
        data: {
            labels: ['Sep 20', 'Oct 20', 'Noi 20', 'Dec 20', 'Ian 21', 'Feb 21', 'Mar 21', 'Iun 21', 'Iul 21',  'Aug 21'],
            datasets: [
              {
                label: 'ATA',
                data: [fillLastYear()],
                borderColor: "orange",
                backgroundColor: "orange",
              },
              {
                label: 'Certificate',
                data: [fillLastYear()],
                borderColor: "red",
                backgroundColor: "blue",
              },
              {
                label: 'Expertiza',
                data: [fillLastYear()],
                borderColor: "violet",
                backgroundColor: "violet",
              },
              {
                label: 'Evaluare',
                data: [fillLastYear()],
                borderColor: "green",
                backgroundColor: "green",
              },
              {
                label: 'AAIJ',
                data: [fillLastYear()],
                borderColor: "green",
                backgroundColor: "green",
              }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        },
    },
    "created-last-month": {
        type: 'line',
        data: {
            labels: [],
            datasets: [
              {
                label: 'Așteptare',
                data: [],
                borderColor: "orange",
                backgroundColor: "orange",
              },
              {
                label: 'Confirmate',
                data: [],
                borderColor: "red",
                backgroundColor: "blue",
              },
              {
                label: 'Achitate',
                data: [],
                borderColor: "violet",
                backgroundColor: "violet",
              },
              {
                label: 'Finisate',
                data: [],
                borderColor: "green",
                backgroundColor: "green",
              }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        }
    }
};