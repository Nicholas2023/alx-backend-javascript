export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((currentValue, student) => currentValue + student.id, 0);
  }
  return [];
}
