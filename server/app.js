// // подключение express
// const http = require('http');
// const express = require("express");
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута "/"
// app.get("/fruits?date", function(request, response){
//     const birthdate=new Date(request.params.birthdate);
//     const month=birthdate.getMonth()+1;
//     const day=birthdate.getDate();
//     let horos='';
//       // Определяем знак зодиака и возвращаем соответствующий гороскоп
//   if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//     horoscope = 'Овен - вы будете полны энергии и уверенности в себе сегодня.';
//   } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//     horoscope = 'Телец - сегодня вы будете наслаждаться приятными мгновениями в компании близких.';
//   } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//     horoscope = 'Близнецы - сегодня вас ждут неожиданные встречи и знакомства.';
//   } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//     horoscope = 'Рак - вы будете чувствовать себя уютно и защищенно среди близких людей сегодня.';
//   } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//     horoscope = 'Лев - сегодня вам нужно быть готовыми к переменым и принимать риски.';
//   } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//     horoscope = 'Дева - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   } else if((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
//     horoscope = 'Весы - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   } else if((month === 10 && day >= 24) || (month === 11 && day <= 23)) {
//     horoscope = 'Скорпион - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   } else if((month === 11 && day >= 25) || (month === 12 && day <= 24)) {
//     horoscope = 'Стрелец - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   }else if((month === 12 && day >= 25) || (month === 1 && day <= 24)) {
//     horoscope = 'Козерог - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   }else if((month === 1 && day >= 26) || (month === 2 && day <= 25)) {
//     horoscope = 'Водолей - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   }else if((month === 2 && day >= 26) || (month === 3 && day <= 25)) {
//     horoscope = 'Рыбы - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
//   }
//     // отправляем ответ
//     response.send(horos);
// });
// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000);
// //Весы, Скорпион, Стрелец, Козерог, Водолей и Рыбы






const http = require('http');

const fruits = [
  {
    name: 'apple',
    date: '2023-04-19'
  },
  {
    name: 'banana',
    date: '2023-04-20'
  },
  {
    name: 'orange',
    date: '2023-04-18'
  }
];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/fruits?date') {
    // parse query string
    const query = new URLSearchParams(req.url.split('?')[1]);
    const date = query.get('date');

    // filter fruits by date
    const filteredFruits = fruits.filter(fruit => fruit.date === date);

    // send response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(filteredFruits));
  } else {
    // send 404 response
    res.statusCode = 404;
    res.end();
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

