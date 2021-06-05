// Задание №1
var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2 (a = 1 (стр. 2). Сначала делается инкримент a, a = 2, затем в с помещается значение а, с = 2). 
d = b++;
alert(d); // 1 (b = 1 (стр. 2). Сначала в d помещается значение b, d = 1, затем делается инкримент b, b = 2).
c = (2 + ++a);
alert(c); // 5 (а = 2 (стр. 3). Сначала делается инкримент а, а = 3, затем в с помещается значение а, увеличенное на 2, с = 2 + 3 = 5)
d = (2 + b++);
alert(d); // 4 (b = 2 (стр. 4). Сначала в d помещается значение b, увеличенное на 2, d = 2 + 2 = 4, затем делается инкримент b, b = 3)
alert(a); // 3 (а = 3 (стр. 5)).
alert(b); // 3 (b = 3 (стр. 6)).

// Задание №2
var a = 2;
var x = 1 + (a *= 2); // 5 (a *= 2, a = 4  x = 1 + 4 = 5).

//Задание №3
var a = parseInt(prompt("Введите значение а:"));
var b = parseInt(prompt("Введите значение b:"));
if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

// Задание №4 вариант 1
var a = parseInt(Math.random() * 14 + 1);
switch (a) {
    case 0:
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
}

// Задание №4 вариант 2
function write2console(num) {
    console.log(num);
    if (num == 15) return;
    write2console(num + 1);
}

write2console(parseInt(Math.random() * 14 + 1));

// Задание №5
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// Задание №6
function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        default:
            return NaN;
    }
}

alert(mathOperation(+prompt("Введите первое число"), +prompt("Введите второе число"), prompt("Введите арифметическое действие (+, -, *, /)")));

// Задание №7
console.log("0 == null - " + (0 == null)); //false - недочет алгоритма сравнения на равенство js. В алгоритме нет сравнения типа переменной null c number, поэтому алгоритм выдает по умолчанию false. 
console.log("0 != null - " + (0 != null)); //true - алгоритм: если сравнение на равенство выдает false, значит сранение на неравенство - true.
console.log("0 < null - " + (0 < null)); //false - в данном случае null преобразуется в +0, 0 < 0 - false.
console.log("0 > null - " + (0 > null)); //false - в данном случае null преобразуется в +0, 0 > 0 - false.
console.log("0 <= null - " + (0 <= null)); //true - алгоритм: если сравнение "больше" выдает false, значит сравнение "меньше или равно" - true.
console.log("0 >= null - " + (0 >= null)); //true - алгоритм: если сравнение "меньше" выдает false, значит сравнение "больше или равно" - true.

// Задание №8
var result = 1;

function power(val, pow) {
    if (pow == 0) return;
    result *= val;
    power(val, pow - 1);
}

power(parseInt(prompt("Введите основание")), parseInt(prompt("Введите степень")));
alert("Результат равен " + result);