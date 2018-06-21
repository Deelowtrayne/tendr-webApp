module.exports = function(stored) {
    var data = [];

    if (stored) {
      for (let i = 0; i < stored.length; i++){
        data.push(stored[i]);
      }
    }

    function filterByValue(minValue, maxValue){
      var list = [];
      for(var i = 0; i < data.length; i++){
        if(data[i].value > minValue && data[i].value < maxValue ){
          list.push(data[i]);
        }
      }

      return list;
    }
    return {
      data,
      filterByValue
    }
}
