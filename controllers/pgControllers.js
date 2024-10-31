const PgModel = require('../models/PgModel');
const Pg = require('../models/PgModel');

const createPg = async(req, res)=>{
    try{
        const {pgName, pgOwnerName, pgType, pgAddress, pgFacilities} = req.body
        const pgInfo = new PgModel({
            pgName,
            pgOwnerName,
            pgType,
            pgAddress,
            pgFacilities
        })
        await pgInfo.save()
        res.status(201)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}

const getPg = async(req, res)=>{
    try{
        const pgs = await PgModel.find()
        res.status(200).json(pgs)

    }catch(error){
        console.log("there is an error", error)
        res.status(500).json({message:'server error'})
    }
    
}
const updatePg = async(req, res)=>{
    try{
        const {pgName, pgOwnerName, pgType, pgAddress, pgFacilities} = req.body
        const myPg = await PgModel.findByIdAndUpdate(
            req.params.id,{
                pgName, pgOwnerName, pgType, pgAddress, pgFacilities
            }
        )
        if(!myPg){
            return res.status(404).json({message:"pg not found"})
        }
        res.status(200).json(myPg)
        
    }catch(error){
        console.error('there is an error:', error)
        res.status(500).json({message: "server error"})
    }
}
const createRoom = async(req, res)=>{
    try{
        const {roomNumber, sharingType, floor, amountPerBed, Facilities} = req.body
        const roomInfo = new roomModel({
            roomNumber,
            sharingType,
            floor,
            amountPerBed,
            pgFacilities
        })
        await roomInfo.save()
        res.status(201)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}

const getRoom = async(req, res)=>{
    try{
        const rooms = await roomModel.find()
        res.status(200).json(pgs)

    }catch(error){
        console.log("there is an error", error)
        res.status(500).json({message:'server error'})
    }
    
}
const updateRoom = async(req, res)=>{
    try{
        const {roomNumber, sharingType, floor, amountPerBed, Facilities} = req.body
        const myRoom = await roomModel.findByIdAndUpdate(
            req.params.id,{
                roomNumber, sharingType, floor, amountPerBed, Facilities
            }
        )
        if(!myRoom){
            return res.status(404).json({message:"room not found"})
        }
        res.status(200).json(myRoom)
        
    }catch(error){
        console.error('there is an error:', error)
        res.status(500).json({message: "server error"})
    }
}
 const createTenant = async(req, res)=>{
    try{
        const {tenantName, Phone, email, roomId, pgId, startDate, endDate} = req.body
        const tenantInfo = new tenantModel({
            tenantName,
            Phone,
            email,
            roomId,
            pgId,
            startDate,
            endDate
        })
        await tenantInfo.save()
        res.status(201)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}

const getTenant = async(req, res)=>{
    try{
        const tenants = await tenantModel.find()
        res.status(200).json(tenants)

    }catch(error){
        console.log("there is an error", error)
        res.status(500).json({message:'server error'})
    }
    
}
const updateTenant = async(req, res)=>{
    try{
        const {tenantName, Phone, email, roomId, pgId, startDate, endDate} = req.body
        const myTenant = await TenantModel.findByIdAndUpdate(
            req.params.id,{
                tenantName, Phone, email, roomId, pgId, startDate, endDate
            }
        )
        if(!myTenant){
            return res.status(404).json({message:"tenant not found"})
        }
        res.status(200).json(myTenant)
        
    }catch(error){
        console.error('there is an error:', error)
        res.status(500).json({message: "server error"})
    }
} 
module.exports = { createPg, getPg, updatePg, createRoom, getRoom, updateRoom,createTenant, getTenant, updateTenant }