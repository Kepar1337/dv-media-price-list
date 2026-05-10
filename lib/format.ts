export function fmt(n: number | string): string {
  if (typeof n === 'number') {
    return n.toLocaleString('uk-UA').replace(/,/g, ' ');
  }
  return String(n);
}
