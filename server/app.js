  const express = require('express');
  const cors = require('cors');

  const app = express();

  app.use(cors());

  // rest of your code

  app.get("/api/fruits/:birthdate", function(request, response){
    const birthdate=new Date(request.params.birthdate);
    if (isNaN(birthdate)) {
      response.status(404).send('Invalid date format');
      return;
    }
    const month=birthdate.getMonth()+1;
      const day=birthdate.getDate();
      let horoscope='';
        // Определяем знак зодиака и возвращаем соответствующий гороскоп
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      horoscope = 'Oвен - вы будете полны энергии и уверенности в себе сегодня.';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      horoscope = 'Телец - сегодня вы будете наслаждаться приятными мгновениями в компании близких.';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      horoscope = 'Близнецы - сегодня вас ждут неожиданные встречи и знакомства.';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      horoscope = 'Рак - вы будете чувствовать себя уютно и защищенно среди близких людей сегодня.';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      horoscope = 'Лев - сегодня вам нужно быть готовыми к переменым и принимать риски.';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      horoscope = 'Дева - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
    } else if((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
      horoscope = 'Весы - сегодня вас ждет удачный день для новых начинаний и достижения целей.';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      horoscope = 'Скорпион - сегодня вам нужно проявлять осторожность в принятии решений и избегать конфликтов.';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      horoscope = 'Стрелец - сегодня вам нужно проявлять терпение и сдержанность в общении с другими людьми.';
      } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      horoscope = 'Козерог - сегодня вам нужно быть целеустремленным и настойчивым в достижении своих целей.';
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      horoscope = 'Водолей - сегодня вас ждут необычные события и интересные открытия.';
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      horoscope = 'Рыбы - сегодня вам нужно проявлять сострадание и заботу о близких людях.';
      }
      response.json({ horoscope });      });
      // начинаем прослушивать подключение на 3000 порту
      app.listen(3000);
