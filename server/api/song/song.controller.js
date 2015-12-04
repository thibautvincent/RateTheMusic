'use strict';

var _ = require('lodash');
var Song = require('./song.model');
var Album = require('../album/album.model');

// Get list of songs
exports.index = function(req, res) {
  Song.find(function (err, songs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(songs);
  });
};

// Get a single song
exports.show = function(req, res) {
  Song.findById(req.params.id, function (err, song) {
    if(err) { return handleError(res, err); }
    if(!song) { return res.status(404).send('Not Found'); }
    return res.json(song);
  });
};

// Creates a new song in the DB.
exports.create = function(req, res) {
  Song.create(req.body, function(err, song) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(song);
  });
};

// Updates an existing song in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Song.findById(req.params.id, function (err, song) {
    if (err) { return handleError(res, err); }
    if(!song) { return res.status(404).send('Not Found'); }
    var updated = _.merge(song, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      Album.findById(song.album)
      .then(function(album){
        if(!album) { return res.status(404).send('Not Found'); }
        return res.status(200).json(album.songs);
      });

    });
  });
};

// Deletes a song from the DB.
exports.destroy = function(req, res) {
  Song.findById(req.params.id)
  .then(function(song){
    // if(err) { return handleError(res, err); }
    if(!song) { return res.status(404).send('Not Found'); }

    Album.findById(song.album)
    .then(function(album){
      // if(err) { return handleError(res, err); }
      if(!album) { return res.status(404).send('Not Found'); }
        if(album.songs.indexOf(req.params.id) != -1){
          album.songs.splice(album.songs.indexOf(req.params.id),1);
          album.save()
          song.remove();
          return res.status(200).json(album.songs);
        }else{
          return res.status(404).send("Not found");
        }

    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
