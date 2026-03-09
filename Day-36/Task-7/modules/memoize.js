// modules/memoize.js
function memoizeAsync(func) {
  const cache = new Map(); 
  return async function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key); 
    } else {
      const result = await func.apply(this, args); 
      cache.set(key, result);
      return result;
    }
  }
}

export { memoizeAsync as memoize };