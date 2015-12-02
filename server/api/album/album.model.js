'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  albumtitle: String,
  artist: String,
  released_at: String,
  genre: String,
  description: String,
  cover: String,
  upvotes: {type: Number, default: 0},
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

module.exports = mongoose.model('Album', AlbumSchema);
