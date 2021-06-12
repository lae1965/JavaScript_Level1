// Задача №1

function Obj(source) {
    this.units = source % 10;
    this.tens = parseInt(source / 10) % 10;
    this.handreds = parseInt(source / 100);
}

while (1) {
    var source = parseInt(prompt("Введите целое положительное трехзначное число"));
    if (!isNaN(source) && source >= 0 && source < 1000) break;
    alert("Неверный формат ввода!!!\nПопробуйте еще раз.");
}

console.log(new Obj(source));