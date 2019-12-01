let now = new Date();

const messageTime = () => {
  const updateMessageTime = () => {
    const messageSpan = document.getElementById("time");
    if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    } else {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      messageSpan.innerHTML = [time].join(' / ');
    }
  }

  setInterval(updateMessageTime, 1000);
}

const mobileMessageTime = () => {
  const updateMobileMessageTime = () => {
    const mobileSpan = document.getElementById("mobile-time");
    if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() >= 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() >= 10 && now.getSeconds() < 10 && now.getHours() < 10) {
      let time = '0' + now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else if (now.getMinutes() < 10 && now.getSeconds() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    } else {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + now.getSeconds();
      mobileSpan.innerHTML = [time].join(' / ');
    }
  }

  setInterval(updateMobileMessageTime, 1000);
}

const horizontalTime = () => {
  const updateHorizontalTime = () => {
    const times = document.querySelectorAll(".horizontal-time");
    if (now.getSeconds() < 10 && now.getMinutes() >= 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
      times.forEach((t) => {
        t.innerHTML = [time].join(' / ');
      })
    } else if (now.getMinutes() < 10 && now.getSeconds() < 10 && now.getHours() >= 10) {
      let time = now.getHours() + '<span class="color-gold">:</span>' + '0' + now.getMinutes() + '<span class="color-gold">:</span>' + '0' + now.getSeconds();
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

  setInterval(updateHorizontalTime, 1000);

}

export { messageTime, mobileMessageTime, horizontalTime }
