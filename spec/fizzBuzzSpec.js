describe('fizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('dividisble by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('when playing, says', function(){

    it('fizz if divisible by 3',function(){
      expect(fizzbuzz.says(3)).toEqual("fizz");
    });

    it('buzz if divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("buzz");
    });

    it('fizzbuzz if divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("fizzbuzz");
    });
  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(4)).toBe(false);
    });
  });

});
