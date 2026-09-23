export const isNew = (dateStr: string): boolean => {
  const posted = new Date(dateStr).getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  return Date.now() - posted < oneDayMs;
};