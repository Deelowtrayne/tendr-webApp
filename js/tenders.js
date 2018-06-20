module.exports = function(stored) {
    var data = [];

    if (stored) {
      for (let i = 0; i < stored.length; i++){
        data.push(stored[i]);
      }
    }

    return {
      data
    }
}
