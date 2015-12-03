/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Song = require('../api/song/song.model');
var Album = require('../api/album/album.model');
var Comment = require('../api/comment/comment.model');

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });
Song.find({}).remove(function(){
  Album.find({}).remove(function(){
    Comment.find({}).remove(function(){
      Album.create({
        albumtitle: "Nevermind",
        artist: "Nirvana",
        released_at: "23/23/19",
        genre: "Grunge",
        cover:"http://images.rapgenius.com/180ec864a554a1ebdc8cd21979b5a4c8.1000x1000x1.jpg",
        description: "Best album",
      },function(err,album){
        Song.create({
          title: "Smells Like Teen Spirit",
        },function(err, song){
          Comment.create({
            title: "My opinio",
            body: "Great!! Really love this album",
            author: "56604ce30cffb0b00af27209"
          }, function(err, comment){
            album.songs.push(song._id);
            album.comments.push(comment.id);
            song.albums.push(album._id);
            comment.album = album._id;
            album.save(function(err){
              if(err) {console.log(err);}
              song.save(function(err){
                if(err) {console.log(err);}
                comment.save(function(err){
                  if(err) {console.log(err);}
                  console.log(album);
                  console.log(song);
                  console.log(comment);
                })
              })
            })
          })
        });
      });
    });
  });
});


var song = new Song({
  title: "Smells Like Teen Spirit",
  info: "First song",
  albums : []
});
