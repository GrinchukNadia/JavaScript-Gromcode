// old
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => 
  allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(el => `Good job, ${el}`)

// tests
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];
console.log(getMessagesForBestStudents(allStud, retakeStud));