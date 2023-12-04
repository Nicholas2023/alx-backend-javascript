export default function getStudentByLocation(arr, locSearch) {
  if (arr instanceof Array) {
    return arr.filter((student) => student.location === locSearch);
  }
  return [];
}
