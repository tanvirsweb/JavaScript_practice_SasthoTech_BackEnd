// test backend: thunder client (vs code extension) / postman
const express = require('express') ,
    router = express.Router()    

const service = require('../services/student.service')

// http://localhost:3000/api/students
router.get('/', async (req, res)=>{
    const students = await service.getAllstudents()
        .catch(err=> console.log(err)) 
    res.send(students)
})

//get info
router.get('/:id', async (req, res)=>{
    const student = await service.getStudentById(req.params.id)
        .catch(err=> console.log(err)) 
    //student == undefined or,
    if(student.length==0)
        res.status(404).json('no record with given id: '+req.params.id)
    else
        res.send(student)
})

//delete info
router.delete('/:id', async (req, res)=>{
    const affectedRows = await service.deleteStudentById(req.params.id)
        .catch(err=> console.log(err)) 
    if(affectedRows == 0)
        res.status(404).json('no record with given id: '+req.params.id)
    else
        res.send('deleted successfully')
})

//add info
router.post('/', async (req, res)=>{
    console.log(req.body)
    await service.addOrEditStudent(req.body)
        .catch(err=> console.log(err)) 
    res.status(201).json('Created successfully')
})

//update info
router.put('/:id', async (req, res)=>{
    console.log(req.body)
    const affectedRows = await service.addOrEditStudent(req.body, req.params.id)
        .catch(err=> console.log(err)) 
    if(affectedRows == 0)
        res.status(404).json('no record with given id: '+req.params.id)
    else
        res.send('Updated successfully')
})


module.exports = router;