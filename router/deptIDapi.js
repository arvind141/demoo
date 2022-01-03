const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var deptModel = require('../model/deptID.js');
const { request} = require("express");

router.post('/deptadd', (request, response) => {
    console.log("request",request);
    const user = new deptModel ({
        studentid : request.body.studentid,
        deptID : request.body.deptID,
        deptname : request.body.deptname,
        maxintake : request.body.maxintake
    });
    user.save().then(data => {
        var object = {
            "statusCode": 200,
            "message": "successfully created a new student",
            "record " : data
        };
        response.send(object);
    }) .catch(error => {
        var objectives = {
            "statusCode": 500,
            "message": error
    };
    response.send(objectives);
})
}); 
module.exports = router;