
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
    let industries = [];
    let tenders = stored.tenders;
    
    for (let i = 0; i < tenders.length; i++) {
      if (!industries.includes(tenders[i].department)){
        industries.push(tenders[i].department);
      }
    }
    return industries;
  }

  function getAwardDates(){
    let dates = [];
    let tenders = stored.tenders;
    
    for (let i = 0; i < tenders.length; i++) {
      if (!dates.includes(tenders[i].awardedDate)){
        dates.push(tenders[i].awardedDate);
      }
    }
    return dates;
  }

  function search(field, value){
    
    let query = `tenders[*${field}~/.*${value}.*/i]`;
    console.log(query);
    
    var result = jsonQuery(query, {
      data:data,
      allowRegexp: true
    });
    console.log(result)
    return result.value;
  }

  function filterBy(searchStr, field) {
    let qs = searchStr.split(" ");
    let searchResults = [];
    qs.forEach(word => {
      let result = search(field, word);
      searchResults = searchResults.concat(result);
    });
    return venderResults;
  }

  function searchAllFields(industry) {
    var depList = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].department.includes(department))
        depList.push(data[i]);
    }
    return depList;
  }

  return {
    data,
    searchAllFields,
    getIndustryTotals,
    getDeptTotals,
    filterBy,
    getIndustryNames,
    getAwardDates,
  }
}
