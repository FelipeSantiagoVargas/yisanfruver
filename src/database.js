// var pgp = require('pg-promise')(/* options */)
// const cn = {
//     host: '138.197.71.156',
//     port: 5432,
//     database: 'yisanfruver',
//     user: 'yisanfruver',
//     password: 'yisanfruver',
//     max: 30 // use up to 30 connections

//     // "types" - in case you want to set custom type parsers on the pool level
// };
// var db = pgp(cn)

// console.log(db)

// db.one('SELECT * FROM product')
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })

const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "yisanfruver",
  host: "138.197.71.156",
  database: "yisanfruver",
  password: "yisanfruver",
  port: 5432,
});

module.exports = pool;