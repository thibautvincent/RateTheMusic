'use strict';

var _ = require('lodash');
var Song = require('../song/song.model');
var Album = require('./album.model');

// Get list of albums
exports.index = function(req, res) {
  Album.find(function (err, albums) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(albums);
  });
};

// Get a single album
exports.show = function(req, res) {
  Album.findById(req.params.id, function (err, album) {
    if(err) { return handleError(res, err); }
    if(!album) { return res.status(404).send('Not Found'); }
    return res.json(album);
  });
};

// Creates a new album in the DB.
exports.create = function(req, res) {
  Album.create(req.body, function(err, album) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(album);
  });
};

// Updates an existing album in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Album.findById(req.params.id, function (err, album) {
    if (err) { return handleError(res, err); }
    if(!album) { return res.status(404).send('Not Found'); }
    var updated = _.merge(album, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(album);
    });
  });
};

// Deletes a album from the DB.
exports.destroy = function(req, res) {
  Album.findById(req.params.id, function (err, album) {
    if(err) { return handleError(res, err); }
    if(!album) { return res.status(404).send('Not Found'); }
    album.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

//Add a song to an album
exports.addSong = function(req, res){
  console.log("Reached addSong");
    Album.findById(req.params.id, function (err, album){
      if(err) {return handleError(res,err);}
      if(!album) { return res.status(404).send('Not Found'); }

      var song = new Song(req.body);
      song.albums.push(album);
      song.save(function(err, song){
        album.songs.push(song);
        album.save(function(err){
          if (err) { return handleError(res, err); }
          return res.status(200).json(album);
        });
      });
    })
}

exports.removeSong = function(req, res){
  Album.findById(req.params.id, function(err, album){
    if(err) { return handleError(res, err); }
    if(!album) { return res.status(404).send('Not Found'); }
    for(var i = 0; i < album.songs.size; i++){
      if(res.body.id === album.songs[i]){
        album.songs[i].remove(function(err){
          if (err) { return handleError(res, err); }
          return res.status(200).json(album);
        })
      }
    }
  });
}
function handleError(res, err) {
  return res.status(500).send(err);
}
