const time = () => {

  const updateClock = () => {
    let now = new Date();
    if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    } else {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      document.getElementById('time').innerHTML = [time].join(' / ');
      document.getElementById('mobile-time').innerHTML = [time].join(' / ');
      document.getElementById('horizontal-time').innerHTML = [time].join(' / ');
    }
  }

  // set the content of the element with the ID time to the formatted string

  // call this function again in 1000ms
  setInterval(updateClock, 1000);
}

export { time }
