function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

const addTwoNumbers = createAdder(5);
console.log(addTwoNumbers(3)); // Выведет 8
