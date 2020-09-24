# **Дипломная работа. Бэкэнд**

## **Версия** 0.0.4

## **Описание API**
Бэкэнд для дипломной работы. Позволяет зарегистрироваться на ресурсе, и добавлять новости в список избранного.

## **Превью**
Публичный ip - [84.201.179.185](84.201.179.185)

Домен API - [https://api.news-app.ga](https://api.news-app.ga)

Домен - [https://news-app.ga](https://news-app.ga)

## **Описание API**
- `POST /signup` - создаёт пользователя с переданными в теле email, password и name
- `POST /signin` - проверяет переданные в теле почту и пароль и возвращает JWT
- `GET /users/me` - возвращает информацию о пользователе (email и имя)
- `GET /articles` - возвращает все сохранённые пользователем статьи
- `POST /articles` - создаёт статью с переданными в теле keyword, title, text, date, source, link и image
- `DELETE /articles/articleId` - удаляет сохранённую статью  по _id


## **Стэк технологий** 
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/ru/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Validator](https://www.npmjs.com/package/validator)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- [Helmet](https://www.npmjs.com/package/helmet)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [cors](https://www.npmjs.com/package/cors)
- [ESLint](https://eslint.org)

## **Установка**
- Скачать репозиторий и установить зависимости - `$ npm install`
- Запустить сервер на http://localhost:3000 - `$ npm run start`
- Запустить сервер с "горячей" перезагрузкой http://localhost:3000 - `$ npm run dev`
