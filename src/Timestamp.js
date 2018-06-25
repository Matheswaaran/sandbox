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
  let hours = timestamp.getHours();
  let str = "AM";
  if (hours > 12) {
    hours -= 12;
    str = "PM";
  }
  return `${hours}:${timestamp.getMinutes()}:${timestamp.getSeconds()} ${str}`;
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
