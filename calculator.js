const Calculator = function(){
    this.add = function(number1, number2){
        return number1 + number2;
    }
    this.subtract = function(number1, number2){
        return number1 - number2;
    }
    this.multiply = function(number1, number2){
        return number1 * number2;
    }
    this.divide = function(number1, number2){
        return number1 / number2;
    }
    this.modulus = function(number1, number2){
        return number1 % number2;
    }
    this.odd = function(number){
        return ((number & 1) == 1)
    }
    this.even = function(number){
        return this.modulus(number, 2) == 0
    }
}

module.exports = {Calculator}

