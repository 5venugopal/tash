const express = require('express')
const router = express.Router()
const pgControllers = require("../controllers/pgControllers")
const pg = require("../models/PgModel")


//get, post , put, delete

router.post('/add-pg', pgControllers.createPg)
router.get('/allpgs', pgControllers.getPg)
router.put('/update/:id', pgControllers.updatePg)
router.post('/add-room', pgControllers.createRoom)
router.get('./all-rooms', pgControllers.getRoom)
router.put('./update/:id', pgControllers.updateRoom)
router.post('./add-tenant', pgControllers.createTenant)
router.get('./allTenants', pgControllers.getTenant)
router.put('./update/:roomId', pgControllers.updateTenant)
module.exports = router
