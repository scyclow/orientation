const $beta = document.getElementById('beta');
const $gamma = document.getElementById('gamma');
const $alpha = document.getElementById('alpha');
const $absolute = document.getElementById('absolute');

const throttle = (fn, time) => {
  let runFn = true;
  setInterval(() => runFn = true, time);

  return (...args) => {
    if (runFn) {
      fn(...args);
      runFn = false;
    }
  }
}


function handleOrientation(event) {
  const { beta, gamma, absolute, alpha } = event;
  $beta.innerHTML = beta;
  $alpha.innerHTML = JSON.stringify(alpha);
  $gamma.innerHTML = JSON.stringify(gamma);
  $absolute.innerHTML = JSON.stringify(absolute);
}
window.addEventListener("deviceorientation", throttle(handleOrientation, 100), true);
