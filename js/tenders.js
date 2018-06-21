"use strict";
module.exports = function (stored) {
  const jsonQuery = require('json-query');
  var data = [];

  if (stored) {
    for (let i = 0; i < stored.length; i++) {
      stored[i].industry = stored[i].department.split(' - ')[0];
      stored[i].department = stored[i].department.split(' - ')[1];
      data.push(stored[i]);
    }
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

  function search(field, value){
    let query = `tenders[*${field}~/.*${value}.*/i]`;
    console.log(query);
    
    var result = jsonQuery(query, {
        data:stored,
        allowRegexp: true
    });
    console.log(result)
    return result.value;
  }

  function filterBy(searchStr, field) {
    let qs = searchStr.split(" ");
    //let descResults = {},
    //  tenderNumResults = {},
    let searchResults = [];
    //  industryResults = {},
    //  deptResults = {};

 
    qs.forEach(word => {
      // let query = `tenders[*vendor~/.*${word}.*/i]`;
      // console.log(query);
      // var result = jsonQuery(query, {
      //   data:stored,
      //   allowRegexp: true
      // });
      
      let result = search(field, word);
      
      //if(result.value.length > 0){
        searchResults = searchResults.concat(result);
      //}

    });


    return venderResults;
  }

  function filterByIndustry(industry) {
    var depList = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].department.includes(department))
        depList.push(data[i]);
    }
    return depList;
  }

  return {
    data,
    filterByIndustry,
    getIndustryTotals,
    getDeptTotals,
    filterBy
  }
}
