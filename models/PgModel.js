const mongoose = require('mongoose')

const pgSchema = new mongoose.Schema({
    //pgName, pgOwnerName, pgType, pgAddress, pgFacilities
    pgName:{
        type:String, required: true
    },
    pgOwnerName:{
        type:String, required: true
    },
    pgType:{
        type:String, required: true
    },
    pgAddress:{
        type:String, required: true
    },
    pgFacilities:{
        type:[String], default: []
    }

});

const roomSchema = new mongoose.Schema({
    //roomNumber, sharingType, floor, amountPerBed, Facilities
  roomNumber:{
       type:Number, required: true
   },
    sharingType:{
     type:String, required: true
    },
   floor:{
        type:String, required: true
   },
    amountPerBed:{
        type:Number, required:true
    },
   Facilities:{
       type:[String], default: []
   }
})
 const tenantSchema = new mongoose.Schema({
    //tenantName, Phone, email, roomId, pgId, startDate, endDate
  tenantName:{
       type:String, required: true
   },
    Phone:{
     type:Number, required: true
    },
   email:{
        type:String, required: true
   },
    roomId:{
        type:Number, required:true
    },
   pgId:{
        type:String, required:true
   },
    startDate:{
        type:Date, required:true
    },
    endDate:{
        type:Date, required:true
    }
})

module.exports = mongoose.model('pgModel', pgSchema, roomSchema, tenantSchema)
