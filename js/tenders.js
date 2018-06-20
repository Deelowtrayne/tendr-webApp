module.exports = function(stored) {
    var data = [];

    if (stored) {
      for (let i = 0; i < stored.length){
        data.push(stored[i]);
      }
    }

    function filterByIndustry(dep) {

    }

    return {
      data
    }
}
