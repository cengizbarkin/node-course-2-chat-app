const moment = require('moment');


let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 9886;

let date = moment(createdAt);
console.log(date.format('h:mm a'));
