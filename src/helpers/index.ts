// @ts-nocheck
export function generateDate(timestamp: number) {
  const now = new Date(timestamp);

  const day = `${now.getDate()}`.padStart(2, 0);
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const year = now.getFullYear();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);

  return `${day}/${month}/${year}, ${hour}:${min}`;
}
