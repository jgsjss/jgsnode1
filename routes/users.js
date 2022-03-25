var express = require('express');
var router = express.Router();
const db = require("../config/db.js")



/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', async function (req, res) {
    for (let i = 0; i < 1000; i++) {
        let rand = Math.ceil(Math.random() * 101)
        let createuser = "insert into user values (null,?)"
        await db.query(createuser, rand)
    }
    let [row, field] = await db.query("select * from user")

    res.json(row)
})

module.exports = router;
