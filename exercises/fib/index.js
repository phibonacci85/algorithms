// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibonacci(n, memoize) {
  if(memoize[n] !== void 0) {
    return memoize[n];
  } else {
    return memoize[n] = fibonacci(n-1, memoize) + fibonacci(n-2, memoize);
  }
}

function fib(n) {
  const memoize = [0, 1, 1];
  return fibonacci(n, memoize);
}

module.exports = fib;
