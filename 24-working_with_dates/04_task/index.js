export function studentsBirthDays(students) {
  const copy = [...students];
  const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let birthdayMonthOfStudents = {};
  copy
    .sort(
      (a, b) =>
        new Date(a.birthDate).getMonth() - new Date(b.birthDate).getMonth()
    )
    .forEach((studentObj) => {
      const monthNumber = new Date(studentObj.birthDate).getMonth();
      const monthName = monthArr[monthNumber];

      if (Object.keys(birthdayMonthOfStudents).includes(monthName)) {
        birthdayMonthOfStudents[monthName].push(studentObj);
      } else {
        birthdayMonthOfStudents = {
          ...birthdayMonthOfStudents,
          ...{ [monthName]: [studentObj] },
        };
      }
    });

  const sortedNamesOfStudents = Object.values(birthdayMonthOfStudents).map((studentObj) =>
    studentObj
      .sort(
        (a, b) =>
          new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
      )
      .map(({ name }) => name)
  );

  const sortedStudents = {};
  Object.keys(birthdayMonthOfStudents).forEach((month, index) => {
    sortedStudents[month] = sortedNamesOfStudents[index];
  });

  return sortedStudents;
}

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Kat', birthDate: '01/1/2010' },
  { name: 'Pol', birthDate: '01/23/2010' },
  { name: 'Tom', birthDate: '05/15/2010' },
  { name: 'Wan', birthDate: '05/1/2010' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Ben', birthDate: '07/17/2008' },
];

console.log(studentsBirthDays(students));
