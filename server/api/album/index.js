'use strict';

var express = require('express');
var controller = require('./album.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/:id/songs', controller.addSong);
router.post('/:id/vote/:user', controller.vote);
router.post('/:id/comment', controller.addComment);

module.exports = router;
