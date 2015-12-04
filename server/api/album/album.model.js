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
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  upvotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

module.exports = mongoose.model('Album', AlbumSchema);
