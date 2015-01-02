// // SongQueue.js - Defines a backbone model class for the song queue.
//  var songQueue = new SongQueue();
//         songQueue.add(songData1);
//         expect(playSpy).to.have.been.called;


var SongQueue = Songs.extend({
  //if time permits, set up queue/dequeue functionality, that plays next sond when current song has finished playing.
  //make queue property to store all songs
  queue: [],

  initialize: function(){


    this.on('add', function(){
      // if number of songs in songQueue === 1, call playFirst
      if (this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', this.removeFirst);

  },

  dequeue: function(song) {
    this.remove(song);
  },
  
  // create event handler when ended is triggered
  removeFirst: function() {
    this.shift();

    //if the SongQueue length is > 0, call playFirst
    if (this.length > 0) {
      this.playFirst();
    }
  },

  //create 'playfirst' method that plays a song after it's added to the SongQueue
  playFirst: function() {
    this.get(this.at(0)).play();
  },

});
