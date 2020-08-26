var calc = {
    "+": function(x,y) {return x + y},
    "-": function(x,y) {return x - y}
}

function operation(operator) {
    return function(number1, number2) {
        return calc[operator](number1, number2);
    }
}

var number1 = 10;
var number2 = 20;

operationSignalSum = "+";

sum = operation(operationSignalSum);

console.log(sum(number1, number2));