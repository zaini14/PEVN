const express = require('express')
const router = express.Router()
const {sequelize, Siswa, Spp} = require('../models')


router.post('/', async(req, res) => {
	const {bulan, tahun, nominal, userId, isPay} = req.body

	try {
		const siswa = await Siswa.findOne({
			where: {id : userId}
		})
		const spp = await Spp.create({
			bulan, tahun, nominal, isPay,
			userId: siswa.id
		})
		return res.json(spp)

	} catch(e) {
		// statements
		console.log(e);
	}
})

router.get('/', async (req, res) => {
	try {
	const spp = await Spp.findAll({include: 'siswa'})
	return res.json(spp)
	} catch(e) {
		// statements
		console.log(e);
	}	
})

router.get('/:id', async(req,res) => {
	const id = req.params.id
	try {
		const spp = await Spp.findOne({
			where: {id},
			include: 'siswa'
		})
		return res.json(spp)
	} catch(e) {
		// statements
		console.log(e);
	}
})

// Delete

router.delete('/:id', async(req,res) => {
	const id = req.params.id
	try {
		const spp = await Spp.destroy({
			where: {id}
		})
		return res.json(spp)
	} catch(e) {
		console.log(e);
	}
})

// Update
router.put('/:id', async(req,res) => {
	const {bulan, tahun, nominal, userId, isPay} = req.body
	
	const id = req.params.id
	try {
		const spp = await Spp.update({bulan, tahun, nominal, userId, isPay}, {
			where: {id}
		})
		return res.json(spp)
	} catch(e) {
		// statements
		console.log(e);
	}
})



module.exports = router