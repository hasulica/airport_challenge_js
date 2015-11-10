var FizzBuzz = function(){};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0 );
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
};

FizzBuzz.prototype.says = function(number){
  if(this.isDivisibleByFifteen(number)) {
    return "fizzbuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "fizz";
  }

  if(this.isDivisibleByFive(number)) {
    return "buzz";
  }
  return number;
};
