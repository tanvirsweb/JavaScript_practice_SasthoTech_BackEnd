// test backend: thunder client (vs code extension) / postman
const express = require('express') ,
    router = express.Router();    

const service = require('../services/student.service');

// http://localhost:3000/api/students
router.get('/', async (req, res)=>{
    try{
        const students = await service.getAllstudents();
        res.send(students);
    } catch(err){
        console.log(err);
    } 
});

//get info
router.get('/:id', async (req, res)=>{
    try{
        const student = await service.getStudentById(req.params.id);
        //student == undefined or,
        if(student.length==0)
            res.status(404).json('no record with given id: '+req.params.id);
        else
            res.send(student);
    } catch(err){
        console.log(err);
    }
});

//delete info
router.delete('/:id', async (req, res)=>{
    try{
        const affectedRows = await service.deleteStudentById(req.params.id);
        if(affectedRows == 0)
            res.status(404).json('no record with given id: '+req.params.id);
        else
            res.send('deleted successfully');
    } catch(err){
        console.log(err);
    }
});

//add info
router.post('/', async (req, res)=>{
    try{
        console.log(req.body)
        await service.addOrEditStudent(req.body);
        // .catch(err=> console.log(err)) // don't use .catch() --> for await --> promise().then().catch() is used 
        // for async...await --> use try{}catch(err){} --> best practice
        res.status(201).json('Created successfully');
    } catch(err){
        console.log(err);
    }
})

//update info
router.put('/:id', async (req, res)=>{
    try{
        console.log(req.body);
        const affectedRows = await service.addOrEditStudent(req.body, req.params.id);
        if(affectedRows == 0)
            res.status(404).json('no record with given id: '+req.params.id);
        else
            res.send('Updated successfully');
    } catch(err){
        console.log(err);
    }
})


module.exports = router;