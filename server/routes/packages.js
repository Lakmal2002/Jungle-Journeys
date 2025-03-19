const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    return res.json({message: 'Booking packages'});
});

module.exports = router;