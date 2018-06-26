import dateTime, { date, time, day, timeAgo } from "./Timestamp";

document.getElementById("getVal").addEventListener("click", function() {
  let timestamp = document.getElementById("unixtime").value;
  let just_timestamp = timestamp * 1000;
  console.log(timestamp);
  if (timestamp === "") {
    timestamp = new Date(Date.now());
  } else {
    timestamp = new Date(timestamp * 1000);
  }

  document.getElementById("values").innerHTML = `
    The complete value is \'${dateTime(timestamp)}\' <br>
    The date is \'${date(timestamp)}\' <br>
    The time is \'${time(timestamp)}\' <br>
    The day is \'${day(timestamp)}\' <br>
    This is \'${timeAgo(just_timestamp)}\' ago
  `;
});
