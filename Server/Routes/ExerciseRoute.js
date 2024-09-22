const express = require('express');
const FavouriteRoute = express.Router();
const Favourite = require("../Models/Favourites");
const cookieParser = require("cookie-parser");

FavouriteRoute.use(cookieParser())

// ADDING A FAVOURITE

FavouriteRoute.post("/AddFavourite", async (req, res) => {
    const Exercises = new Favourite(req.body)

    try {
        const SavedExercises = await Exercises.save() 
        res.send(SavedExercises)
    } catch (error) {
        console.error(error)
    }
})

// GETTING ALL THE FAVOURITES CREATED BY A SINGLE USER BY THEIR USER ID

FavouriteRoute.get('/:userId/Favourites', async (req, res) => {
    const userId = req.params.userId;
    try {
        const Favourites = await Favourite.find({ userOwner: userId });
        res.json(Favourites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching favourites.' });
    }
});

// DELETING A FAVOURITE BASED ON THE FAVOURITE ID

FavouriteRoute.delete("/:id", async (req, res) => {
    try{
        const Favourites = await Favourite.findByIdAndDelete(req.params.id)
        res.json({Message: "Deleted Successfully!"})
    }
    catch(err) {
        res.send(err)
    }
})

module.exports = FavouriteRoute