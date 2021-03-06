var mongoose = require('mongoose');
var DeliveredHistory = require('../model/deliveredHistory/deliveredHistory.js').DeliveredHistory

function route(app) {
    db = mongojs('mongodb://bobby:123456@ds259768.mlab.com:59768/ancapnew',['deliveredHistory']);

    app.post('/driver/deliveredhistory', function (req, res) {
        db.deliveredHistory.find({driverPhone:req.body.driverPhone}, function (err, data){
            if(err){
                res.json({
                    status:400,
                    message:"please try again"
                })
            }
            else if(!data.length){
                res.json({
                    status:200,
                    message: "Unfortunately there isn't any history to show"
                })
            }
            else{
            res.json({
                status: 200,
                messsage:"view your delivered jobs below",
                data:data
		    });
            }
        })
    })
}

module.exports.route = route;