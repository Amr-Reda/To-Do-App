const express = require('express');
const router = express.Router();

const Item = require('./models/item');

router.get('/', async (req, res) => {
	Item.find({
		userId: req.user.sub,
	})
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newItem = new Item({
		userId: req.user.sub,
		name: req.body.name,
	});
	newItem.save().then((item) => res.json(item));
});

router.delete('/:id', (req, res) => {
	Item.findOne({ _id: req.params.id, userId: req.user.sub })
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
