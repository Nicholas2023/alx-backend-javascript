export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (getListStudents instanceof Array && newGrades instanceof Array) {
    return getListStudents
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
