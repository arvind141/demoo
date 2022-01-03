const express= require("express")
var mongoose = require("mongoose");
const router = express.Router();
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var studentModel = require("./model/student.js");
var studentapi = require('./router/studentapi.js');

var courseModel = require("./model/course.js");
var courseapi = require('./router/courseapi.js');

var deptModel = require("./model/deptID.js");
var deptapi = require('./router/deptIDapi.js');

var marksModel = require("./model/marks.js");
var marksapi = require('./router/marksapi.js'); 



app.use('/',router);
app.get("/",function(request,response){
response.send("Hello World!")
})
mongoose.connect('mongodb://localhost:27017/Studentmanagementsystem', () => {
    console.log("[+] succesfully connected to database.");
    
});


app.listen(2000, function () {
console.log("started application on port %d", 2000)
});

app.use('/', studentapi);
app.use('/', courseapi);
app.use('/', deptapi);
app.use('/', marksapi);
