'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: String,
  body: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  album: {type: Schema.Types.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Comment', CommentSchema);
