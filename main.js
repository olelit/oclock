let elemH = document.getElementById("elemH");
let elemM = document.getElementById("elemM");
let hoursWords = [
    "Ебучие <span class='light'>ноль</span> часов ночи",
    "Чертов <span class='light'>один</span> час ночи",
    "Пизданутые <span class='light'>два</span> часов ночи",
    "Заебучие <span class='light'>три</span> час ночи",
    "Гребанные <span class='light'>четыре</span> часа утра",
    "Депрессивные <span class='light'>пять</span> часов утра",
    "Отвратительные <span class='light'>шесть</span> утра",
    "Мертвые <span class='light'>семь</span> часов утра",
    "Тупорылые <span class='light'>восемь</span> часов утра",
    "Зверские <span class='light'>девять</span> часов утра",
    "Уродливые <span class='light'>десять</span> часов утра",
    "Убитые <span class='light'>одинадцать</span> часов утра",
    "Никому нахер не нужные <span class='light'>двенадцать</span> часов дня",
    "Убитые горем <span class='light'>тринадцать</span> часов дня",
    "Мерзкие <span class='light'>четырнадцать</span> часов дня",
    "Убийственные <span class='light'>пятнадцать</span> часов дня",
    "Ненавистные <span class='light'>шестнадцать</span> часов дня",
    "Апатичные <span class='light'>семнадцать</span> часов дня",
    "Безраличные <span class='light'>восемнадцать</span> часов вечера",
    "Истеричные <span class='light'>девятнадцать</span> часов вечера",
    "Чёрствый <span class='light'>двадцать</span> час вечера",
    "Ничтожные <span class='light'>двадцать один</span> часа вечера",
    "Негативные <span class='light'>двадцать два</span> часа вечера",
    "Ненавистные <span class='light'>двадцать три</span> часа вечера",
]

let minTenTwelve = [
    "десять",
    "одинадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать"
]

let nullTen = [
    "ноль",
    "одна",
    "две",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
]

let minTens = [
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
]

function getTime(){
    let time = new Date();
    let outputH = hoursWords[time.getHours()];
    let outputM = time.getMinutes();
    let val = 0;

    let buf = String(outputM).split("");
    outputM="и "
    if(buf.length > 1){
        if(buf[0] > 1){
            outputM+=minTens[buf[0]-2]+" "+nullTen[buf[1]]+" минута";
        }
        else if(buf[0] = 1){
            outputM+=minTenTwelve[buf[1]]+" минут";;
        }
    }
    else{
        val = nullTen[buf[0]];
        console.log(buf[0]);
        outputM+=val;
        if(buf[0] == 0){
            outputM+=" минут";
        }
        else if(buf[0] == 1){
            outputM+=" минута";
        }
        else if(buf[0] >=2 && buf[0] <= 4){
            outputM+=" минуты";
        }
        else if(buf[0] >=5 && buf[0] <= 9){
            outputM+=" минут";
        }

    }


    elemH.innerHTML = outputH;
    elemM.innerHTML = outputM;
}

let interval = setInterval(getTime,1000);