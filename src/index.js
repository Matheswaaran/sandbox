import dateTime, { date, time, day } from "./Timestamp";

document.getElementById("getVal").addEventListener("click", function() {
  let timestamp = new Date(Date.now());
  document.getElementById("values").innerHTML = `
    The complete value is \'${dateTime(timestamp)}\' <br>
    The date is \'${date(timestamp)}\' <br>
    The time is \'${time(timestamp)}\' <br>
    The day is \'${day(timestamp)}\'
  `;
});
