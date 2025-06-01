const express = require('express')
const{
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
}= require('../controllers/workoutCotroller')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// reqire auth 4 all workouts
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router