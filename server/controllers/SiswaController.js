const express = require('express')
const router = express.Router()
const {sequelize, Siswa} = require('../models')


// Select All
router.get('/', async(req,res) => {
	try {
		const siswa = await Siswa.findAll({include: 'spp'})
		return res.json(siswa)
	} catch(e) {
		// statements
		console.log(e);
	}
})

router.post('/', async(req, res) => {
	const {name, kelas, alamat} = req.body

	try {
		const siswa = await Siswa.create({name,kelas,alamat
		})
		return res.json(siswa)

	} catch(e) {
		// statements
		console.log(e);
	}
})

// Select Just One
router.get('/:id', async(req,res) => {
	const id = req.params.id
	try {
		const siswa = await Siswa.findOne({
			where: {id}
		})
		return res.json(siswa)
	} catch(e) {
		// statements
		console.log(e);
	}
})

// Delete

router.delete('/:id', async(req,res) => {
	const id = req.params.id
	try {
		const siswa = await Siswa.destroy({
			where: {id}
		})
		return res.json(siswa)
	} catch(e) {
		console.log(e);
	}
})

// Update
router.put('/:id', async(req,res) => {
	const {name, kelas, alamat} = req.body
	
	const id = req.params.id
	try {
		const siswa = await Siswa.update({name, kelas, alamat}, {
			where: {id}
		})
		return res.json(siswa)
	} catch(e) {
		// statements
		console.log(e);
	}
})

module.exports = router