var url = require("url");

const parcedUrl = url.parse(
  " https://airindia.com/fares/calculate?from=delhi&to=detroitand"
);

console.log(parcedUrl.query(), parcedUrl.pathname(), parcedUrl.protocol());

var queryString = (parcedUrl.query);

console.log(queryString);


