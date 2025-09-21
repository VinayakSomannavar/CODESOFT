document.getElementById('submitBtn').addEventListener('click', function () {
  const marks = [
    parseInt(document.getElementById('subject1').value),
    parseInt(document.getElementById('subject2').value),
    parseInt(document.getElementById('subject3').value),
    parseInt(document.getElementById('subject4').value)
  ];

  fetch('/api/marks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ marks: marks })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('result').innerHTML = `
        Total Marks: ${data.totalMarks}<br>
        Average Percentage: ${data.averagePercentage}%<br>
        Grade: ${data.grade}
      `;
    })
    .catch(err => console.error('Error:', err));
});
