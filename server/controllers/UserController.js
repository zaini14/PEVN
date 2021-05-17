const express = require('express')
const router = express.Router()
const {sequelize, User} = require('../models')


// Add
router.post('/', async(req, res) => {
	const {name, email, password, role} = req.body

	try {
		const user = await User.create({name,email,password,role
		})
		return res.json(user)

	} catch(e) {
		// statements
		console.log(e);
	}
})

// Select All
router.get('/', async(req,res) => {
	try {
		const user = await User.findAll()
		return res.json(user)
	} catch(e) {
		// statements
		console.log(e);
	}
})

// Select Just One
router.get('/:id', async(req,res) => {
	const id = req.params.id
	try {
		const user = await User.findOne({
			where: {id}
		})
		return res.json(user)
	} catch(e) {
		// statements
		console.log(e);
	}
})

// Delete

router.delete('/:id', async(req,res) => {
	const id = req.params.id
	try {
		const user = await User.destroy({
			where: {id}
		})
		return res.json(user)
	} catch(e) {
		console.log(e);
	}
})

// Update
router.put('/:id', async(req,res) => {
	const {name, email, password, role} = req.body
	
	const id = req.params.id
	try {
		const user = await User.update({name,email,password,role
		}, {
			where: {id}
		})
		return res.json(user)
	} catch(e) {
		// statements
		console.log(e);
	}
})

module.exports = router



