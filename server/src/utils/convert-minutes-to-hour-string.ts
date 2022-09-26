export function convertMinutesToHoursString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = Math.floor(minutesAmount % 60);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padEnd(2, '0')}`;
}