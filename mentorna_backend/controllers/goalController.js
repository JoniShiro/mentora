const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

//@desc     Create goals
//@route    POST /api/goals
//@access   Private
const createGoal = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400);
        throw new Error("Please add a text field");
    }
    
    const goal = await Goal.create({
        name: req.body.name,
        description: req.body.description
    });


    res.status(200).json(goal);
});

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(404);
        throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        
    res.status(200).json(updatedGoal);
});

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(404);
        throw new Error("Goal not found");
    }

    await goal.deleteOne({ _id: req.params.id});
    res.status(200).json({id: req.params.id});
});

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};