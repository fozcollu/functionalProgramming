const sumLogic = (a, b, c) => {
  return a + b + c;
};

function curry(func) {
  return function curried(...args1) {
    if (args1.length >= func.length) {
      return func.apply(null, args1);
    } else {
      return function(...args2) {
        return curried.apply(null, args1.concat(args2));
      };
    }
  };
}
export const curryWithSum = (...args) => curry(sumLogic)(...args);
