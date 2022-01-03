const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var studentModel = require("../model/student.js");
const { request , response } = require("express");
const student = require("../model/student.js");


router.post('/studentAdd', (request, response) => {
    console.log("request",request);
    const user = new studentModel ({
        studentid : request.body.studentid,
        firstname : request.body.firstname,
        lastname : request.body.lastname,
        address : request.body.address,
        yoj : request.body.yoj,
        dob : request.body.dob,
        gender : request.body.gender,
        deptID : request.body.deptID,
        status : request.body.status,
        semesterno : request.body.semesterno
    });
    if(user.firstname == "" || user.lastname == "" || user.address == "" || user.yoj == "" || user.dob == "" ||
    user.gender == "" || user.deptid == "" || user.status == "" || user.semesterno == ""){
        var objectRes ={
            "statuscode": 400,
            "message": "mandatory feilds"
        };
        response.send(objectRes);
    }else{
    user.save().then(data => {
        var object = {
            "statuscode": 200,
            "message": "successfully created a new student",
            "record " : data
        };
        response.send(object);
    }) .catch(error => {
        var objectRes = {
            "statuscode": 500,
            "message": "student cant add"
    };
    response.send(objectRes);
    });
};
});
module.exports = router; 

//api to delete the student based on object id 
router.post('/deletestudent', function(req,res) {
    studentModel.deleteOne({
        studentid:req.body. studentid
    })
    .exec() 
    .then(function (data,error) {
        if(data){
            console.log(data);
            var is ={
                "statuscode" : 200,
                "message" : "succesfully deleted student",
                "record": data
        };
        res.send(is);
    }
        if(error){
            let obj = {
                "statuscode": 500,
                "message": "student cant delete"
            };
            res.send(obj);
        }
    })
})
module.exports = router;  

//api to get the student details based on object id 

router.post('/getstudent',function (req, res) {
    studentModel
    .findOne({ studentid:req.body.studentid})
    .lean()
    .exec()
    .then(function (data) {
        if(data) {
            console.log(data);
            let obj1 = {
                "statuscode": 200,
                "record": data,
                "message": "successfully get the student"
            }
            // console.log(error);
            res.status(200).send(obj1);
        }
    })
    .catch(function (error) {
        let obj = {
            "statuscode": 500,
            "message": "Student not found"
        };
        res.status(500).send(obj);
    });
});
module.exports = router;  

  // api to update student details 

 router.post('/updatestudent', function (request , response) {
    studentModel.findOne({ studentid:request.body. studentid})
    .exec()
    .then(function (data) {
        if (data) {
            console.log("1",data);
            data.firstname = request.body.firstname;
            console.log("2",data);
            data.save().then(function(data) {
                var object = {
                    "statuscode": 200,
                    "record": data,
                    "message": "succesfully  update a student"
                }
                response.send(object);
            })
              .catch(function(error){
                var object = {
                    "statuscode": 500,
                    "message": "student record doesnot updated",
                    "record": error
                }
                response.send(object);
            })
        }
    })
    .catch(function (error){
        var object = {
            "statuscode": 500,
            "message": "student record not found",
        }
        console.log("error message", error);
        response.send(object);
    })
}),
module.exports = router;  
