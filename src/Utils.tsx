
export function isSameArray(a: any[], b: any[]) {
  let i = a.length;
  if (i !== b.length) {
    return false;
  }
  while (i--) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
