const date = timestamp => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return `${timestamp.getDate()} ${
    months[timestamp.getMonth()]
  } ${timestamp.getFullYear()}`;
};

const time = timestamp => {
  return `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
};

const day = timestamp => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[timestamp.getDay()];
};

const dateTime = timestamp => {
  return timestamp;
};

export default dateTime;
export { date, time, day };
