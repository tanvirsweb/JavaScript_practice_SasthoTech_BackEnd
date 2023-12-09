const Joi = require('joi');//for form validation
const express = require('express');//for REST api
const app = express();
// express object has--> .get() / .post() / .put() / .delete()
const bodyparse = require('body-parser');
app.use(bodyparse.json());//to input body(raw & json): {"name": "courseName"} ,parse this file as Array

const fs = require('fs');//for file management

// PORT: start service
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}: http://localhost:${port}`);
});


const courses =[
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
    {id: 4, name: 'course 4'}
];

app.get('/', (req, res)=>{
    fs.readFile('index.html', function(error, data){
        if(error){            
            res.status(404).send('Error: File not found');
        }else{
            res.send(`${data}`);
        }
    }); 
});


// http://localhost:3000/api/courses
app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.post('/api/courses', (req, res)=>{
    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const course ={
        id: courses[courses.length-1].id + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

// http://localhost:3000/api/courses/2
app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(  c=> c.id == parseInt(req.params.id) );
    if(!course) res.status(404).send('The course with given ID was not found!!');
    res.send(course);
});


//Update course by id: 
// course found in Courses array > Validated course > Update course
app.put('/api/courses/:id', (req, res)=>{
    const course = courses.find( c=> c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found');
    
    const result = validateCourse(req.body);
    // console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    // update course & send update course
    course.name = req.body.name;
    res.send(courses);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

// http://localhost:3000/api/posts/2023/1?sortBy=name
// {"year":"2023","month":"1"}
app.get('/api/posts/:year/:month', (req, res)=>{    
    res.send(req.params);//req.params.year, req.params.month , req.query
    res.send(req.query);//won't send
});

app.delete('/api/courses/:id', (req, res)=>{
    //Look up course
    //Course not exist, return 404
    const course = courses.find( c=> c.id === parseInt(req.params.id));
    if(!course) 
        return res.status(404).send('The course with the given ID was not found');

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);//go to this index and remove 1 object
    //Return the same course
    res.send(course);
});


