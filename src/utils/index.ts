export const toMonthDate = (date: string | Date) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return date.getMonth() + 1 + '/' + date.getDate();
};
