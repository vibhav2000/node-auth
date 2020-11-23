const express = require('express');
const router = express.Router();
const usersApiController = require('../../controller/api/usersapi');

//means to get /api/users/
router.get('/', usersApiController.index);
   
//means to get /api/users/login
router.get('/login', () => {});

//means to get /api/users/signup
router.get('/signup', () => {});



module.exports = router;