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
  $beta.innerHTML = beta && beta.toFixed(5);
  $alpha.innerHTML = alpha && alpha.toFixed(5);
  $gamma.innerHTML = gamma && gamma.toFixed(5);
  $absolute.innerHTML = absolute && absolute.toFixed(5);
}
window.addEventListener("deviceorientation", throttle(handleOrientation, 100), true);
