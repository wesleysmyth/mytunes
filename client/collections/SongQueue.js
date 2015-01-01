// // SongQueue.js - Defines a backbone model class for the song queue.
//  var songQueue = new SongQueue();
//         songQueue.add(songData1);
//         expect(playSpy).to.have.been.called;


var SongQueue = Songs.extend({
  //if time permits, set up queue/dequeue functionality, that plays next sond when current song has finished playing.
  //make queue property to store all songs
  queue: [],

  initialize: function(){
    // call playFirst on initialize

    // this.on('change: attribute', function(){
    //   this.playFirst(songjustadded)
    // })
  },

  // //create 'add' method that adds a song model to the SongQueue
  // add: function(song) {
  //   //add song model to the front of the song queue
  //   this.set(song);
  // },

  //create 'playfirst' method that plays a song after it's added to the SongQueue
  playFirst: function() {
    this.queue[0].play();
  }

});
