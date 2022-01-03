const mongoose = require("mongoose");
const marksSchema = mongoose.Schema ({
    studentid: {type:String},
    course1_id:  {type:String},
    marks1: {type:String},
    course2_id:  {type:String},
    marks2: {type:String},
    course3_id:  {type:String},
    marks3: {type:String},
    deptID:  {type:String},
    examstatus: {type:String},
    datetaken: {type:String},
    semesterno : {type:String}

})

module.exports = mongoose.model('markslist', marksSchema);