function sum1() {
  let sum = 0;

  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

function sum2(...args) {
  let sum = 0;

  for(let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

Function.prototype.myBind1 = function() {
  return () => this.apply(arguments[0], Array.from(arguments).slice(1));
};

Function.prototype.myBind2 = function(ctx, ...args) {
  return (...calls) => this.apply(ctx, args.concat(calls));
};

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const args = [];
  const fn = this;

  function _curry(arg) {
    if (arg) args.push(arg);
    console.log("Args length: " + args.length);

    if (args.length === numArgs) {

      return fn(...args);
    } else {
      return _curry;
    }
  }

  return _curry;
};

function sum() {
  let sum = 0;

  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}
