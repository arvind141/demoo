const mongoose = require("mongoose");
const deptSchema = mongoose.Schema ({ 
    studentid : {type:String},
    deptID: {type:String},
    deptName: {type:String},
    maxintake: {type:String}

})

module.exports = mongoose.model('deptlist', deptSchema);
