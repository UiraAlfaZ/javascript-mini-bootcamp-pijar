//1. array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

//2. array slice

const city = ["jakarta", "pekanbaru", "palembang", "yogyakarta"];
const part = city.slice(1, 3);
console.log(part);

//3. array sort
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers);

//4. array find
const angka = [1, 2, 3, 4, 5];
const firstEven = angka.find(num => num % 2 === 0);
console.log(firstEven);

//5. array push
const cars = ["Jeep", "Toyota", "lamborghini", "Chevrolet"];
cars.push("Ford");
console.log(cars);

//6. new
const letters = new Set(["a","b","c"]);
console.log(letters)

//7. add
const bilangan = new Set(["1","2","3"]);
bilangan.add("4");
bilangan.add("5");
console.log(bilangan)

//8. setMonth, mengatur bulan dalam setahun pada bulan yang ditentukan
let month = new Date();
date.setMonth(11);
console.log(month);

//9. setDate, mengatur hari dalam sebulan untuk tanggal yang ditentukan.
let date = new Date();
date.setDate(25);
console.log(date);

//10. setMinutes, mengatur menit dalam sejam untuk menit yang ditentukan
let minute = new Date();
date.setMinutes(45);
console.log(minute);

