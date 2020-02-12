'use strict';

const {getRandomIntInclusive} = require(`../../../utils`);

const Types = [`offer`, `sale`];
const Titles = [
  `Продам книги Стивена Кинга.`,
  `Продам новую приставку Sony Playstation 5.`,
  `Продам отличную подборку фильмов на VHS.`,
  `Куплю антиквариат.`,
  `Куплю породистого кота.`,
  `Продам коллекцию журналов «Огонёк».`,
  `Отдам в хорошие руки подшивку «Мурзилка».`,
  `Продам советскую посуду. Почти не разбита.`,
  `Куплю детские санки.`,
];
const Descriptions = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.,`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `Две страницы заляпаны свежим кофе.`,
  `При покупке с меня бесплатная доставка в черте города.`,
  `Кажется, что это хрупкая вещь.`,
  `Мой дед не мог её сломать.`,
  `Кому нужен этот новый телефон, если тут такое...`,
  `Не пытайтесь торговаться. Цену вещам я знаю.`,
];
const MAX_DESC_NUM = 5;
const Categories = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`,
];
const Price = {min: 1000, max: 100000};


function getType(maxNum, type) {
  const descNum = getRandomIntInclusive(1, maxNum);
  const descObj = new Set();
  Array(descNum).fill().forEach(() => {
    const key = getRandomIntInclusive(0, type.length - 1);
    descObj.add(key);
  });

  return Array.from(descObj);
}

function generateOffers(count) {
  return Array(count).fill().map(() => {
    const picIndex = getRandomIntInclusive(1, 16);
    return ({
      "type": Types[getRandomIntInclusive(0, Types.length - 1)],
      "title": Titles[getRandomIntInclusive(0, Titles.length - 1)],
      "description": getType(MAX_DESC_NUM, Descriptions),
      "sum": getRandomIntInclusive(Price.min, Price.max),
      "picture": `item${String(0 + picIndex).slice(-2)}`,
      "category": getType(Categories.length - 1, Categories),
    });
  });
}

module.exports = {
  generateOffers,
};
