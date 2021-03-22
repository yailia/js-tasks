function debounce (callback, time = 500) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout( () => callback(...args), time );
  };
}