# **Дипломная работа. Бэкэнд**

## **Версия** 0.0.2

## **Превью**
Публичный ip - []()

Домен API - []()

Домен - []()

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
- [ESLint](https://eslint.org/)

## **Установка**
- Скачать репозиторий и установить зависимости - `$ npm install`
- Запустить сервер на http://localhost:3000 - `$ npm run start`
- Запустить сервер с "горячей" перезагрузкой http://localhost:3000 - `$ npm run dev`
