const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var marksModel = require('../model/marks.js');
const { request} = require("express");

router.post('/marksadd', (request, response) => {
    console.log("request",request);
    const user = new marksModel ({
        studentid:  request.body.studentid,
        course1_id:  request.body.course1_id, 
        marks1:  request.body.marks1,
        course2_id:  request.body.course2_id, 
        marks2:  request.body.marks2,
        course3_id:  request.body.course3_id,
        marks3:  request.body.marks3, 
        deptID:  request.body.deptID,
        examstatus:  request.body.examstatus,
        datetaken:  request.body.datetaken,
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


router.post('/getStudentsMarkList', (request,response) => {
    marksModel
    .find({studentid: request.body.studentid})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the students details",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  
  router.post('/getSemesterWiselist', (request,response) => {
    marksModel
    .find({semesterno: request.body.semesterno})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the students details",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  
  router.post('/getDepartmentWiseList', (request,response) => {
    marksModel
    .find({deptID: request.body.deptID})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the students details",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  module.exports = router;