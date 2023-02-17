// 0. Наполнить массив products подобными объектами, с разными значениями


const products = [
  {
    id: 1,
    name: "Iphone 14pro",
    price: 100000,
    category: "phone",
  },
  {
    id: 2,
    name: "Iphone 14",
    price: 80000,
    category: "mobile",
  },
  {
    id: 3,
    name: "Iphone 13pro",
    price: 90000,
    category: "phone",
  },
  {
    id: 4,
    name: "Iphone 13",
    price: 70000,
    category: "mobile",
  },
  {
    id: 5,
    name: "Iphone 12",
    price: 60000,
    category: "phone",
  },
];
console.log("Весь массив товаров: ")
console.log(products)  


// 1. Вывести название и цену каждого товара в консоли со скидкой 10%

for (let i = 0; i < products.length; i++) {
  console.log("Задача 1. Цена со скидкой 10% " + products[i].name, ((products[i].price / 100) * 90));
  
}

/* 2. Есть массив объектов products. Из этого массива добавить в новый 
    пустой массив только те
    продукты:
        а)цена которых больше 88000; const moreThanPrice = [] нужно 
        заполнить данный массив
        б) категория который "phone"; const categoryPhone = [] */


const moreThanPrice = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 88000) {
    moreThanPrice.push(products[i]);
  }
}
console.log("Задача 2/а) Товары, цена которых больше 88000")
console.log(moreThanPrice);

const categoryPhone = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "phone") {
    categoryPhone.push(products[i]);
  }
}
console.log("Задача 2/б) Категория который 'phone'")
console.log(categoryPhone);

// 3. оздать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них

function max(a, b) {
  if (a > b) {
    console.log("Задача 3. Большее число: " + a);
  } else {
    console.log("Задача 3. Большее число: " + b);
  }
}
max(10, 20);
max(100, 5);
/* 4. Написать функцию, которая запрашивает число у пользователя и 
    отображает "ЧЕТ", если число четное
    и "НЕЧЕТ", если нечетное*/

function odd(a) {
  if (a % 2 === 0) {
    console.log("Четное");
  } else if (a % 2 === 1) {
    console.log("Не четное");
  } else {
    console.log("Вы ввели не верное число ");
  }
}
let a = prompt("Задача 4(чет/нечет). Введите число: ");
odd(a);

/*  5. Написать функцию, которая получает два числа и возводит первое 
    число в степень второго*/

function power(d, c) {
   
  console.log("Задача 5. Функция - в степень " + Math.pow(d, c));
}

power(10, 2); // 100
power(12, 2); // 144
power(2, 5); // 32
