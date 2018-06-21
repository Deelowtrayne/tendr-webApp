module.exports = function(stored) {
  var data = [];

  if (stored) {
    for (let i = 0; i < stored.length; i++) {
      data.push(stored[i]);
    }
  }

  function filterByIndustry(industry) {
    var depList = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].department.includes(department))
        depList.push(data[i]);
    }
  }
  return depList;
}
