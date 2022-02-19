var express = require('express');
var router = express.Router();

const searchTextBol = require('bolScrapper/index');
const insertNewBook = require('../graphql/book');


router.get('/ean', function (req, res) {    
    const ean = req.query.ean
    const deviceId = req.query.deviceId
    const insert = req.query.insert

    if(!ean || !deviceId)
        return res.send(404)

    searchTextBol(ean).then(result => {
        if (insert & result.status == 200) {
            insertNewBook(
                result.newPrice || null,
                result.secondPrice || null,
                result.image,
                result.bookTitle,
                result.url,
                result.totalReview || null,
                result.totalStar || null,
                deviceId
            )
        }
        res.status(result.status)
        res.send(result)
    })
});

module.exports = router;