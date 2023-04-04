const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let somme = 0;
	const args = Array.from(a);
  args.forEach(arg => {
    somme += arg;
  })
  return +somme;
};

const multiply = function(a) {
  let somme = 1;
	const args = Array.from(a);
  args.forEach(arg => {
    somme *= arg;
  })
  return somme;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let fact = a;
  let result = a;
	if(a <= 1){
    return 1;
  }
  return result * factorial(fact - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
