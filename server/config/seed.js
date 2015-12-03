// /**
//  * Populate DB with sample data on server start
//  * to disable, edit config/environment/index.js, and set `seedDB: false`
//  */
//
// 'use strict';
//
// var User = require('../api/user/user.model');
// var Song = require('../api/song/song.model');
// var Album = require('../api/album/album.model');
// var Comment = require('../api/comment/comment.model');
//
// // User.find({}).remove(function() {
// //   User.create({
// //     provider: 'local',
// //     name: 'Test User',
// //     email: 'test@test.com',
// //     password: 'test'
// //   }, {
// //     provider: 'local',
// //     role: 'admin',
// //     name: 'Admin',
// //     email: 'admin@admin.com',
// //     password: 'admin'
// //   }, function() {
// //       console.log('finished populating users');
// //     }
// //   );
// // });
// Song.find({}).remove(function(){
//   Album.find({}).remove(function(){
//     Comment.find({}).remove(function(){
//       Album.create({
//         albumtitle: "Nevermind",
//         artist: "Nirvana",
//         released_at: "24/10/1991",
//         genre: "Grunge",
//         cover:"http://images.rapgenius.com/180ec864a554a1ebdc8cd21979b5a4c8.1000x1000x1.jpg",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "Smells Like Teen Spirit",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });
//       Album.create({
//         albumtitle: "Ten",
//         artist: "Pearl Jam",
//         released_at: "27/09/1992",
//         genre: "Grunge",
//         cover:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_F_9w0TGDeXQ%2FTGxEYkIoKMI%2FAAAAAAAAAF0%2FDUAnRQv4lkY%2Fs1600%2Fpearljamten.jpg&f=1",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "Jeremy",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//       Album.create({
//         albumtitle: "Discusting",
//         artist: "Beartooth",
//         released_at: "10/06/2014",
//         genre: "Hard Rock",
//         cover:"http://ecx.images-amazon.com/images/I/81qOTfqbHOL._SX522_.jpg",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "Keer Your American Dream",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//       Album.create({
//         albumtitle: "Welcome To The Black Parade",
//         artist: "My Chemical Romance",
//         released_at: "23/10/2006",
//         genre: "Alternatice Rock",
//         cover:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.rapgenius.com%2F96120942c9bcbfc4947945e0689721af.1000x1000x1.jpg&f=1",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "The end",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//       Album.create({
//         albumtitle: "Welcome To The Black Parade",
//         artist: "My Chemical Romance",
//         released_at: "23/10/2006",
//         genre: "Alternatice Rock",
//         cover:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.rapgenius.com%2F96120942c9bcbfc4947945e0689721af.1000x1000x1.jpg&f=1",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "The end",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//       Album.create({
//         albumtitle: "Welcome To The Black Parade",
//         artist: "My Chemical Romance",
//         released_at: "23/10/2006",
//         genre: "Alternatice Rock",
//         cover:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.rapgenius.com%2F96120942c9bcbfc4947945e0689721af.1000x1000x1.jpg&f=1",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "The end",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//       Album.create({
//         albumtitle: "Welcome To The Black Parade",
//         artist: "My Chemical Romance",
//         released_at: "23/10/2006",
//         genre: "Alternatice Rock",
//         cover:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.rapgenius.com%2F96120942c9bcbfc4947945e0689721af.1000x1000x1.jpg&f=1",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "The end",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//       Album.create({
//         albumtitle: "Welcome To The Black Parade",
//         artist: "My Chemical Romance",
//         released_at: "23/10/2006",
//         genre: "Alternatice Rock",
//         cover:"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.rapgenius.com%2F96120942c9bcbfc4947945e0689721af.1000x1000x1.jpg&f=1",
//         description: "Best album",
//       },function(err,album){
//         Song.create({
//           title: "The end",
//         },function(err, song){
//           Comment.create({
//             title: "My opinio",
//             body: "Great!! Really love this album",
//             author: "566060af0a875d121120bc2c"
//           }, function(err, comment){
//             album.songs.push(song._id);
//             album.comments.push(comment.id);
//             song.albums.push(album._id);
//             comment.album = album._id;
//             album.save(function(err){
//               if(err) {console.log(err);}
//               song.save(function(err){
//                 if(err) {console.log(err);}
//                 comment.save(function(err){
//                   if(err) {console.log(err);}
//                   console.log(album);
//                   console.log(song);
//                   console.log(comment);
//                 })
//               })
//             })
//           })
//         });
//       });//end
//     });
//   });
// });
