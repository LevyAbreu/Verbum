const ctx = document.getElementById('langChart').getContext('2d');
    const langChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Inglês', 'Espanhol', 'Francês'],
        datasets: [{
          label: 'Proeficiência',
          data: [65, 40, 25],
          backgroundColor: ['#00bcd4', '#4caf50', '#ff9800'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });