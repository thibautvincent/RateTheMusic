'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  upvotes: {type : Number, default: 0},
  albums: [{type: Schema.Types.ObjectId, ref: 'Album'}]
});

module.exports = mongoose.model('Song', SongSchema);
