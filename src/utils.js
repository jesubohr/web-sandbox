function debounce (func, timeout = 1000) {
   let timer;
   return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), timeout);
   };
}

const $ = (selector) => document.querySelector(selector);
const handleChange = (func) => debounce(() => func());

export { $, handleChange };