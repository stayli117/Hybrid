var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
    console.log(req.query);
    res.send('hehe');
});

router.post('/post_test', function (req, res, next) {

    var params = req.body;

    console.log((params));


    res.send({
        msg: "你请求的参数信息是" + JSON.stringify(params)
    })

})

router.get('/post_test', function (req, res, next) {

    var params = req.query;

    console.log((params));


    res.send({
        msg: "你请求的参数信息是" + JSON.stringify(params)
    })

})

module.exports = router;
