exports.calculateResults = (req, res) => {
  const marks = req.body.marks; // [80, 90, 70, 85] etc.

  if (!Array.isArray(marks) || marks.length === 0) {
    return res.status(400).json({ error: 'Invalid marks input.' });
  }

  const total = marks.reduce((acc, curr) => acc + curr, 0);
  const average = total / marks.length;

  let grade = '';

  if (average >= 90) grade = 'A+';
  else if (average >= 80) grade = 'A';
  else if (average >= 70) grade = 'B';
  else if (average >= 60) grade = 'C';
  else if (average >= 50) grade = 'D';
  else grade = 'F';

  res.json({
    totalMarks: total,
    averagePercentage: average.toFixed(2),
    grade: grade,
  });
};
