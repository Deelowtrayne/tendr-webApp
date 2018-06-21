module.exports = function(stored) {
  var data = [];

  if (stored) {
    for (let i = 0; i < stored.length; i++) {
      data.push(stored[i]);
    }
  }

<<<<<<< HEAD


    return {
      data
=======
  function filterByIndustry(industry) {
    var depList = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].department.includes(department))
        depList.push(data[i]);
>>>>>>> 6524edb204ccb8b9054c762cf64c9fcd8ad56825
    }
  }
  return depList;
}
function DataSetFilter(dataSet) {
  var dataMap = {};
  for (var i = 0; i < dataSet.length; i++) {
    var map = dataSet[i];
      var company = map.vendor;
      var industry = map.department;
      var tenderValue = map.value;
      var tenderDate = map.awardedDate;
      var description = map.description;
      var tenderNo = map.no;
    console.log(company);
    for (var key in dataMap) {
      if (dataMap[key] === undefined) {
        dataMap[company] = {industry, tenderValue, tenderDate, description, tenderNo};
      }
      if (dataMap[company] === company) {
        dataMap[company].push({industry, tenderValue, tenderDate, description, tenderNo});
      }
      if (dataMap[key] !== company) {
        dataMap[company] = {industry, tenderValue, tenderDate, description, tenderNo};
      }
    }
  }
}
