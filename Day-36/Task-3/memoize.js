function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = args;
    if (key in cache) {
      return cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  }
}

export {
  memoize
}
