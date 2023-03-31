export const convertUTCToLocalTime = (dateString: any) => {
  let date = new Date(dateString);
  const milliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );
  const localTime = new Date(milliseconds);
  localTime.getDate(); // local date
  localTime.getHours(); // local hour
  return localTime;
};
export const convertUTCToLocalTime_second = (dateString: any) => {
  let date = new Date(dateString);
  const milliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );
  return milliseconds / 1000;
};
