'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  album: {type: Schema.Types.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Song', SongSchema);
