const mongoose = require("mongoose");
const studentSchema = mongoose.Schema ({
    studentid: {type:String},
    firstname: {type:String},
    lastname: {type:String},
    address: {type:String},
    yoj: {type:String},
    dob: {type:String},
    gender: {type:String},
    deptID: {type:String},
    status: {type:String},
    semesterno: {type:String}
    
})  

module.exports = mongoose.model('student', studentSchema);