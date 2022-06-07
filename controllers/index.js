const router = require('express').router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

// These routes haven't been set up yet, just declaring them after creating the files. Still need to decide on the api we are using. 

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

