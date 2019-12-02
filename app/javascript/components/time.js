const messageTime = () => {
  let now = new Date();
  const messageSpan = document.getElementById("time");
  if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span>:</span>' + now.getMinutes() + '<span>:</span>' + '0' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span>:</span>' + '0' + now.getMinutes() + '<span>:</span>' + '0' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span>:</span>' + '0' + now.getMinutes() + '<span>:</span>' + '0' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span>:</span>' + '0' + now.getMinutes() + '<span>:</span>' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span>:</span>' + '0' + now.getMinutes() + '<span>:</span>' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span>:</span>' + now.getMinutes() + '<span>:</span>' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span>:</span>' + now.getMinutes() + '<span>:</span>' + '0' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span>:</span>' + '0' + now.getMinutes() + '<span>:</span>' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  } else {
    let time = now.getHours() + '<span>:</span>' + now.getMinutes() + '<span>:</span>' + now.getSeconds();
    messageSpan.innerHTML = [time].join(' / ');
  }
}

const mobileMessageTime = () => {
  let now = new Date();
  const mobileSpan = document.getElementById("mobile-time");
  if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span">:</span>' + now.getMinutes() + '<span">:</span>' + '0' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span">:</span>' + '0' + now.getMinutes() + '<span">:</span>' + '0' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span">:</span>' + '0' + now.getMinutes() + '<span">:</span>' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span">:</span>' + '0' + now.getMinutes() + '<span">:</span>' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span">:</span>' + now.getMinutes() + '<span">:</span>' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span">:</span>' + now.getMinutes() + '<span">:</span>' + '0' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span">:</span>' + '0' + now.getMinutes() + '<span">:</span>' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  } else {
    let time = now.getHours() + '<span">:</span>' + now.getMinutes() + '<span">:</span>' + now.getSeconds();
    mobileSpan.innerHTML = [time].join(' / ');
  }
}

const horizontalTime = () => {
  let now = new Date();
  const times = document.querySelectorAll(".horizontal-time");
  if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
    let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
    let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  } else {
    let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
    times.forEach((t) => {
      t.innerHTML = [time].join(' / ');
    })
  }
}

export { messageTime, mobileMessageTime, horizontalTime }
