const express = require('express');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const ExerciseRoute = express.Router();
const Workout = require("../Models/Workout");
const cookieParser = require("cookie-parser");

ExerciseRoute.use(cookieParser())
dotenv.config();

const myPassword = process.env.Password

const verifyToken = async (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (authHeader) {
        jwt.verify(authHeader, myPassword, (err) => {
        if (err) {
            return res.sendStatus(403);
        }
        next();
        });
    } else {
        return res.status(401).send("Authorisation token is missing!");
    }
}

// ADDING A WORKOUT

ExerciseRoute.post("/AddWorkout", verifyToken ,async (req, res) => {
    const Workouts = new Workout(req.body)

    try {
        const SavedWorkout = await Workouts.save() 
        res.send(SavedWorkout)
    } catch (error) {
        console.error(error)
    }
})

// GETTING ALL THE WORKOUTS CREATED BY ALL THE USERS

ExerciseRoute.get("/AllWorkouts", async (req, res) => { 
    try{
        const AllWorkouts = await Workout.find() 
        res.json(AllWorkouts)
    }
    catch(err) { 
        res.send(err)  
    }
})

// GETTING ALL THE WORKOUTS CREATED BY A SINGLE USER BY THEIR USER ID

ExerciseRoute.get('/:userId/Workout', async (req, res) => {
    const userId = req.params.userId;
    try {
        const Workouts = await Workout.find({ userOwner: userId });
        res.json(Workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workouts.' });
    }
});

// UPDATING A WORKOUT BASED ON THE WORKOUT ID

ExerciseRoute.put("/:id", async (req, res) => {
    try{
        const Workouts = await Workout.findByIdAndUpdate(req.params.id, req.body)
        res.json(Workouts)
    }
    catch(err) {
        res.send(err)
    }
})

// DELETING A WORKOUT BASED ON THE WORKOUT ID

ExerciseRoute.delete("/:id", async (req, res) => {
    try{
        const Workouts = await Workout.findByIdAndDelete(req.params.id)
        res.json({Message: "Deleted Successfully!"})
    }
    catch(err) {
        res.send(err)
    }
})

// GETTING A WORKOUT BY ITS ID

ExerciseRoute.get('/MyWorkouts/:id', async (req, res) => {
    try {
    const Workouts = await Workout.findById(req.params.id);
    if (!Workouts) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(Workouts);
    } catch (error) {
    res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = ExerciseRoute