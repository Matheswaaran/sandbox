function date(timestamp) {
  return `${timestamp.getDate()}/${timestamp.getMonth() +
    1}/${timestamp.getFullYear()}`;
}

function time(timestamp) {
  return `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
}

function day(timestamp) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[timestamp.getDay()];
}

function dateTime(timestamp) {
  return timestamp;
}

export default dateTime;
export { date, time, day };
