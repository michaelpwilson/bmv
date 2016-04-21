const mv = require('mv');
const async = require("async");

var mvBack = {
  options: {},
  init: function(opts) {
    // if there are options
    // add them to the options property
    if(opts) this.options = opts;
    return this;
  },
  move: function(batch) {

    async.each(batch, function(files, callback){

      mv(files[0], files[1], function(err) {
        if(err) callback(err);

        callback();
      });

    }, function(err){

      if(err) throw new Error(err);
      console.log("files have been moved");

    });

  }
}

module.exports = mvBack.init();
