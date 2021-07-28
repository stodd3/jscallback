updateTime = () => {
  var timeEle = document.querySelector('#timestamp');

  var d = new Date();
  var currentTime = d.getTime();
  var timeStamp = d.toLocaleTimeString();

  timeEle.innerHTML = timeStamp;

}

setInterval(updateTime, 1000);
