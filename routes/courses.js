const express = require('express');
const router = express.Router();
const Course = require('../models/courses');

//creating a routers

router.get('/courses', async (req, res) => {
 try {
  const courses = await Course.find();
  res.json(courses);
 } catch (err) {    
  res.send('Error ' + err);
 }  


}); 

router.get('/courses/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.json(course);
    } catch (err) {
        res.send('Error ' + err);
    }
});

router.post('/courses', async (req, res) => {
    const course = new Course({
        title: req.body.title,
        content: req.body.content,
        videos: req.body.videos,
        active: req.body.active
    });

    try {
        const a1 = await course.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }
});

router.patch('/courses/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        course.sub = req.body.sub;

        const a1 = await course.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }

});

router.delete('/courses/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        course.sub = req.body.sub;

        const a1 = await course.remove();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }

});


module.exports = router;