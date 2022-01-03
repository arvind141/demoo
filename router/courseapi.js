const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var courseModel = require('../model/course.js');
const { request} = require("express");

router.post('/courseadd', (request, response) => {
    console.log("request",request);
    const user = new courseModel ({
        courseId:  request.body.courseId,
        coursename:  request.body.coursename, 
        deptID:  request.body.deptID,
        semesterno:  request.body.semesterno
    
    });
    user.save().then(data => {
        var object = {
            "statuscode": 200,
            "message": "successfully created a new student",
            "record " : data
        };
        response.send(object);
    }) .catch(error => {
        var objectives = {
            "statuscode": 500,
            "message": error
    };
    response.send(objectives);
})
}); 
module.exports = router;