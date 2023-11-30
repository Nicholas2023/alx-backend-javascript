export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const rslt = mathFunction();
    queue.push(rslt);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
