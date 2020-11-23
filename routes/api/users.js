const express = require('express');
const router = express.Router();

//means to get /api/users/
router.get('/', (req, res) => {
    return res.status(200).json({
        success: true
    })
});
   
//means to get /api/users/login
router.get('/login', () => {})

//means to get /api/users/signup
router.get('/signup', () => {})



module.exports = router;