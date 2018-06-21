
module.exports = function (stored) {
  const jsonQuery = require('json-query');
  var data = {};

  if (stored) {
    let tenders = stored.tenders.map(current => {
      let temp = current.department.split(' - ')
      current.industry = temp[0];
      current.department = temp[1];
    });
    data.tenders = tenders;
  }

<<<<<<< HEAD
  function getIndustryTotals() {
    let depMap = {};

    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      let industry = current.industry;
      if (depMap[industry] === undefined) {
        depMap[industry] = 0;
      }
      depMap[industry] += current.value;
    }
    return depMap;
  }
  
  function getDeptTotals() {
    let depMap = {};

    for (let i = 0; i < data.length; i++) {
      let current = data[i];
      let dept = current.industry;
      if (depMap[dept] === undefined) {
        depMap[dept] = 0;
      }
      depMap[dept] += current.value;
    }
    return depMap;
  }

  function getIndustryNames(){
    let tenders = stored.tenders;
    let context = {
      industries: [],
      dates: [],
      values: [],
      vendors: []
    };
=======
>>>>>>> 837cec11386ac15b2542043516cecac0de5d39ab

    for (let i = 0; i < tenders.length; i++) {
      // get industries
      if (!context['industries'].includes(tenders[i].department)){
        context['industries'].push(tenders[i].department);
      }
      // get dates
      if (!context['dates'].includes(tenders[i].awardedDate)){
        context['dates'].push(tenders[i].awardedDate);
      }
      // get values
      if (!context['values'].includes(tenders[i].value)){
        context['values'].push(tenders[i].value);
      }
      // get vendors
      if (!context['vendors'].includes(tenders[i].vendor)){
        context['vendors'].push(tenders[i].vendor);
      }
    }
    return context;
  }

<<<<<<< HEAD
  function search(field, value){
    let query = `tenders[*${field}~/.*${value}.*/i]`;
    var result = jsonQuery(query, {
      data:stored,
      allowRegexp: true
    });
    return result.value;
  }

  function filterBy(searchStr, field) {
    let fullWordResult = search(field, searchStr);

    if (fullWordResult.length > 0) {
      return fullWordResult;
    }

    let qs = searchStr.split(" ");
    let searchResults = [];
    qs.forEach(word => {
      let result = search(field, word);
      searchResults = searchResults.concat(result);
    });
    return searchResults;
  }

=======
>>>>>>> 837cec11386ac15b2542043516cecac0de5d39ab
  return {
    data,
    getIndustryTotals,
    getDeptTotals,
    filterBy,
    getIndustryNames,
  }
}
