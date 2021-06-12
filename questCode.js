//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var answers = [];
var count = 0;

switch (getEvent(0)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (getEvent(1)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                getEvent(3);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                getEvent(3);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (getEvent(2)) {
            case 1: // Второе действие
                getEvent(3);
                break;
            case 2: // Второе действие
                getEvent(3);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

if (answers[answers.length - 1].answer >= 0) {
    var numOfQuestion = +prompt("Какой номер вопроса вам хотелось бы посмотреть?");
    if (isAnswer(answers.length, numOfQuestion)) {
        alert("Вопрос № " + numOfQuestion + " был следующий:\n" + works[answers[numOfQuestion - 1].workNumber].question + "Ответ на него был следующий: " +
            works[answers[numOfQuestion - 1].workNumber].answers[answers[numOfQuestion - 1].answer]); // Очень страшная конструкция, но рабочая
    } else {
        alert("Вопрос под таким номером не задавался!");
    }
}

alert('Спасибо за игру');

//------------------------------------------
function Answers(workNumber, curEvent) {
    this.workNumber = workNumber;
    this.answer = curEvent - 1;
}

function getEvent(workNumber) {

    var str = works[workNumber].question;
    for (var i = 0; i < works[workNumber].numOfAnswers; i++) str += '  ' + (i + 1) + ' - ' + works[workNumber].answers[i];

    while (1) {
        var curEvent = +prompt(str + '-1 - Выход из игры');
        if (curEvent == -1 || isAnswer(works[workNumber].numOfAnswers, curEvent)) {
            answers[count] = new Answers(workNumber, curEvent);
            count++;
            return curEvent;
        }
    }
}

function isAnswer(q, curEvent) {
    if (isNaN(curEvent) || !isFinite(curEvent)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (curEvent < 1 || curEvent > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}