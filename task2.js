function isPrime(num) {
    if (num <= 1 || num > 1000) {
        console.log("Данные неверны");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} не является простым числом`);
            return;
        }
    }

    console.log(`${num} является простым числом`);
}

isPrime(17); // Пример вызова функции с числом 17
