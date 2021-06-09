// Задание №1

var i = 2;
while (i <= 100) {
    var natural = true;
    var j = i - 1;
    while (j >= 2) {
        if (i % j == 0) {
            natural = false;
            break;
        }
        j--;
    }
    if (natural) console.log(i);
    i++;
}

// Задание №2, 3

function countCartPrice(cart) {
    var sum = 0;
    for (var good of cart) {
        sum += good.count * good.price;
    }
    return sum;
}

var cart = [{
        title: "Товар 1",
        price: 100,
        count: 1
    },
    {
        title: "Товар 2",
        price: 200,
        count: 2
    },
    {
        title: "Товар 3",
        price: 300,
        count: 3
    }
];

console.log("Товаров в корзине на сумму " + countCartPrice(cart) + " руб.");

// Задание №4

for (var i = 0; i < 10; console.log(i++));

// Задание #5

for (var i = 0; i < 20; i++) {
    var str = '';
    for (var j = i + 1; j > 0; j--) str += 'x';
    console.log(str);
}