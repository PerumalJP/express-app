require('dotenv').config()
const pg = require('pg');

const {Pool, Client} = pg;

const pool= new Pool()

async function getProducts(){


const res =  await pool.query('SELECT * FROM products').then((res)=> res.rows)
console.log('RRr', res);


}


getProducts()

module.exports = {
    pool
}
