var totalCost = 0,
    count = 1,
    victory = true;

alert('Мы начинаем игру "Кто хочет стать миллионером"');

for (var item of questions) {
    var str = "Вопрос № " + count + ':\n' + item.question;
    for (var i = 0; i < 4; i++) str += item.answers[i] + '\n\n';
    str += "Q: Закончить игру, забрать заработанные деньги"

    while (1) {
        var answer = prompt(str);
        if (isNaN(answer) && answer.length == 1 && "AaФфBbИиCcСсDdВвQqЙй".includes(answer)) break;
        alert("Недопустимый символ! Попробуйте еще раз.");
    }

    if ("QqЙй".includes(answer)) {
        alert(totalCost == 0 ? "К сожалению, Ваш выигрыш равен нулю. Не расстраивайтесь." : ("Поздравляю! Ваш выигрыш составил " + totalCost + " рублей!"));
        victory = false;
        break;
    }

    if (!item.trueAnswer.includes(answer)) {
        str = "К сожалению, Вы ошиблись. Правильный ответ - ";
        for (i = 0; i < 4; i++) {
            if (item.trueAnswer[0] == item.answers[i][0]) break;
        }
        str += item.answers[i] + ".\nВы проиграли. Не расстраивайтесь. В следующий раз Вам больше повезет";
        alert(str);
        victory = false;
        break;
    }

    totalCost += item.cost;
    alert("Это правильный ответ! Ваш выигрыш теперь составляет " + totalCost + " рублей!");

    count++;
}

if (victory) alert("Невероятно!!! Вы ответили на все вопросы и выиграли эту игру!!! Выш выигрыш составляет " + totalCost + " рублей! Поздравляю!!!");