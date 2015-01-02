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
    //call addDequeue on initialize
    this.addDequeue();

    this.on('add', function(){
      //every time we add a song to the SongQueue collection, we want the song to have a dequeue method
      this.addDequeue();
      // if number of songs in songQueue === 1, call playFirst
      if (this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', this.removeFirst);

  },

  addDequeue: function() {
    //create function that adds 'dequeue' method to song model

    //iterate over the length of the songqueue collection
    for (var i = 0; i < this.length; i++) {
      //set a variable equal to the songModel at index i
      var song = this.at(i);
      var collectionContext = this;
      //console.log(collectionContext);
      //console.log(song, 'before');
      // song.set({dequeue: function(){
      //   collectionContext.remove(this);
      // }});
      song.dequeue = function() {
        collectionContext.remove(this);
      };
      //console.log(song, 'after');
      //console.log(song.attributes.dequeue);
    }
  },
    

  // create event handler when ended is triggered
  removeFirst: function() {
    this.shift();
    //after removing the first song from the queue, call playfirst to play next song
    //that is now at the 0th index
    //if the SongQueue length is > 0, call playFirst
    if (this.length > 0) {
      this.playFirst();
    }
  },

  // //create 'add' method that adds a song model to the SongQueue
  // add: function(song) {
  //   //add song model to the front of the song queue
  //   this.set(song);
  // },

  //create 'playfirst' method that plays a song after it's added to the SongQueue
  playFirst: function() {

  },
  //create 'dequeue' method that removes the model passed into 'dequeue'
  // dequeue: function(song) {
  //   this.remove(song);
  // }

});
