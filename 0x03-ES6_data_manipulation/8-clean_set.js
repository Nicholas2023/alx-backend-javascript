export default function cleanSet(set, startString) {
  const filtered = [...set].filter((value) => value.startsWith(startString));
  const cleaned = filtered.map((value) => value.slice(startString.length)).join('-');

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return cleaned;
}
