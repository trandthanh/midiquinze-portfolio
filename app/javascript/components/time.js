const time = () => {

  const updateClock = () => {
    let now = new Date();
    if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + ':' + now.getMinutes() + ':' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + ':' + '0' + now.getMinutes() + ':' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + ':' + '0' + now.getMinutes() + ':' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + ':' + '0' + now.getMinutes() + ':' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + ':' + '0' + now.getMinutes() + ':' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + ':' + now.getMinutes() + ':' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + ':' + '0' + now.getMinutes() + ':' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    } else {
      let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
    }
  }

  // set the content of the element with the ID time to the formatted string

  // call this function again in 1000ms
  setInterval(updateClock, 1000);
}

export { time }
