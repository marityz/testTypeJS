export const data = {
  datasets: [
    {
      active: false,
      label: 'Data One',
      backgroundColor: function (context: any) {
        const index = context.dataIndex;
        const value = context.dataset.data[index];
        return value < 0 ? '#f87979' :  // draw negative values in red
          index % 2 ? '#1027b9' :    // else, alternate values in blue and green
            'rgba(121,57,92,0.66)';
      },
      borderColor: 'transparent',
      data: [40, -40, 20, 80, 10],
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}

export const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40],
      tooltips: {
        intersect: false
      }
    }
  ]
}

export const optionsLine = {
  responsive: true,
  maintainAspectRatio: false
}

export const dataBar = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [
        'red',    // color for data at index 0
        'blue',   // color for data at index 1
        'green',  // color for data at index 2
        'black',  // color for data at index 3
      ],
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    }
  ]
}

export const optionsBar = {
  responsive: true,
  maintainAspectRatio: false
}