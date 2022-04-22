
function getTime() {
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();
  let day = data.getDate();
  let month = data.getMonth();
  let year = data.getFullYear();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  let czas = hours + ":" + minutes + ":" + seconds + " " + day + "." + month + "." + year;

  document.getElementById("zegar").innerHTML = czas;
  setInterval(getTime, 1000);
}

