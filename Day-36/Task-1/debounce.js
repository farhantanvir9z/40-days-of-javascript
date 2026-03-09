function debounce(func, delay = 100) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}

export {
  debounce
}