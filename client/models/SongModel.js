// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  // cerate a method enqueue, and call this.trigger within enqueue method


  //when we call Songs[SongModel Index].enqueue we expect the first element in SongsQueue to be equal to the same song
  //model that we called .enqueue on
  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
    // if the model has a collection and there is at least one model in the collection
    if (this.collection && this.collection.length > 0){
      this.collection.dequeue(this);
    }
  },

  ended: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

});
