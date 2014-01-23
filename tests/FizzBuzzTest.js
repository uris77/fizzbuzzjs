require('should');
var FizzBuzz = require ('../FizzBuzz');

function numberGenerator(predicate){
  var numbers = [];
  for(var i = 1; i <= 100; i++) {
    if(predicate(i)){
      numbers.push(i);
    }
  }
  return numbers;
}

function multiplesOfThree(){
  return numberGenerator(function(num){
    return num % 3 === 0 && num % 5 != 0 ;
  });
}

function multiplesOfFive(){
  return numberGenerator(function(num){
    return num % 5 === 0 && num % 3 != 0 ;
  });
}

function multiplesOfThreeAndFive(){
  return numberGenerator(function(num){
    return num % 3 === 0 && num % 5 === 0;
  });
}

function notMultiplesOfThreeAndFive(){
  return numberGenerator(function(num){
    return num % 3 !== 0 && num % 5 !== 0;
  });
}


describe('Fizz Buzz', function (err, u) {
  it('numbers that are multiple of 3 are represented as Fizz', function(){
    multiplesOfThree().forEach(function(num){
      FizzBuzz(num).should.equal('Fizz');
    });
  });

  it('numbers that are multiple of 5 are represented as Buzz', function(){
    multiplesOfFive().forEach(function(num){
      FizzBuzz(num).should.equal('Buzz');
    });
  });

  it('numbers that are multiple of 3 And 5 are represented as FizzBuzz', function(){
    multiplesOfThreeAndFive().forEach(function(num){
      FizzBuzz(num).should.equal('FizzBuzz');
    });
  });

  it('numbers that are not multiples of 3 and 5 are represented as themselves', function(){
    notMultiplesOfThreeAndFive().forEach(function(num){
      FizzBuzz(num).should.equal(num);
    });
  });

});
