// @desc get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message: 'get goals'})
}

// @desc set a goal
// @route POST /api/goals
// @access private
const setGoal = (req, res) => {
    res.status(200).json({message: 'add a goal'})
}

// @desc update a goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
}

// @desc delete a goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}