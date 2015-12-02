/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Song = require('../api/song/song.model');
var Album = require('../api/album/album.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
Song.find({}).remove(function(){
  Album.find({}).remove(function(){
    Album.create({
      albumtitle: "Nevermind",
      artist: "Nirvana",
      released_at: "23/23/19",
      genre: "Grunge",
      cover:"http://images.rapgenius.com/180ec864a554a1ebdc8cd21979b5a4c8.1000x1000x1.jpg",
      description: "Best album",
    }).then(function(album){
      console.log("test");
      var song = {
        title: "Smells Like Teen Spirit",
        upvotes: 0,
        albums: []
      };
      Album.addSong(album.id,song)
      .then(function(){
        console.log("test2");
      });
    });
  });
});


var song = new Song({
  title: "Smells Like Teen Spirit",
  info: "First song",
  albums : []
});
