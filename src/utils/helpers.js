import { addWeeks, isAfter, isBefore, parseISO, subDays } from "date-fns";

export function isToday(taskDate) {
  const today = new Date();
  return (
    taskDate.getDate() === today.getDate() &&
    taskDate.getMonth() === today.getMonth() &&
    taskDate.getFullYear() === today.getFullYear()
  );
}

export function isOneWeekApart(taskDate) {
  const dateNow = new Date();
  return (
    isAfter(taskDate, subDays(dateNow, 1)) &&
    isBefore(taskDate, addWeeks(dateNow, 1))
  );
}
