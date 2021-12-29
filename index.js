const addDays = require("date-fns/addDays");
function getReqDate(days) {
  const reqDate = addDays(new Date(2020, 7, 22), days);
  return reqDate;
}

console.log(getReqDate(10));
