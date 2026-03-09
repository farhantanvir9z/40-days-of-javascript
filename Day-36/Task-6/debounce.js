function debounce(fucn, delay = 100) {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fucn.apply(this, args);
    }, delay)
  }
}

export {
  debounce
}