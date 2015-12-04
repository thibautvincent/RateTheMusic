'use strict';

var _ = require('lodash');
var Song = require('../song/song.model');
var Album = require('./album.model');
var Comment = require('../comment/comment.model');
var mongoose = require('mongoose');
var Promise = require('bluebird');

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
    // for(var i = 0; album.comments.length; i++){
    //   Comment.findById(album.comments[i], function(err, comment){
    //     if (err) { return handleError(res, err); }
    //     album.comments[i] = comment;
    //   });
    // }
    return res.json(album);
  });
};
//Get comments from album
exports.getComments = function(req, res){

  var commentsFull = [];
  console.log('comments');
  Album.findById(req.params.id)
    .then(function (err, album) {
      if(err) { return handleError(res, err); }
      if(!album) { return res.status(404).send('Not Found'); }
      return Comment.find({
        _id: {
          $in: album.comments
        }
      });
    })
    .then(function (comments) {
      return res.status(200).json(comments);
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
    Album.findById(req.params.id, function (err, album){
      if(err) {return handleError(res,err);}
      if(!album) { return res.status(404).send('Not Found'); }

      Song.find({})
      .then(function(songs){

        var song = new Song(req.body);
        for (var i = 0; i < songs.length; i++) {
          Song.findById(songs[i])
          .then(function(song){
            console.log(song.title);
            console.log(req.body.title);
            console.log(song.title === req.body.title);
            if(song.title === req.body.title ){

              return res.status(201).send("Already exists");
            }
          });
        }
          song.album = req.params.id;
          song.save()
          album.songs.push(song);
          album.save();
          return res.status(200).json(song);
    });
  });
}
//like an album
exports.vote = function(req, res) {
  Album.findById(req.params.id, function (err, album){
    if(err) {return handleError(res,err);}
    if(!album) { return res.status(404).send('Not Found'); }
    if(album.upvotes.indexOf(req.params.user) === -1){
      album.upvotes.push(req.params.user);
    }else{
      album.upvotes.splice(album.upvotes.indexOf(req.params.user),1);
    }

    album.save(function(err){
      if(err) {return handleError(res, err)};
      console.log(album);
      return res.status(200).json(album.upvotes.length);
    });
  });
}

// //get songs of Album
// exports.getSongs = function(req, res){
//   var
//   Album.findById(req.params.id, function(err, album){
//     if(err) {return handleError(res, err);}
//     if(!album) {return res.status(404).send('Not found');}
//
//     for(var i = 0; i < album.songs.length; i++){
//       Song.findById(album.songs[i], function(err, song){
//         if(err) {return handleError(res, err);}
//
//       })
//
//     }
//   });
// }

//React on an album
exports.addComment = function(req, res){
  Album.findById(req.params.id, function(err, album){
    if(err) { return handleError(res, err); }
    if(!album) { return res.status(404).send('Not Found'); }
    Comment.create({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      album: req.params.id
    },function(err, comment){
      if(err) { return handleError(res, err); }
      album.comments.push(comment._id);
      album.save(function(err){
        if (err) { return handleError(res, err); }
        return res.status(200).json(album);
      });
    });
  });
};

//Remove song from album
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
