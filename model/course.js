const mongoose = require("mongoose");
const courseSchema = mongoose.Schema ({
    courseId: {type:String},
    coursename: {type:String},
    deptID: {type:String},
    semesterno: {type:String}

    
})  

module.exports = mongoose.model('course', courseSchema);