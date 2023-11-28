export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // No unused vars
    const task2 = false; // No unused vars
  }

  return [task, task2];
}
