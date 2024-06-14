import {isAfter, parseISO} from 'date-fns';

export const isOverdue = (dueDate: string) => {
  const parsedDate = parseISO(dueDate);

  return isAfter(new Date(), parsedDate);
};
