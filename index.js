var moment  = require('moment');

function nextMonth(){
    return moment().add(1, 'M');
}

module.exports = {nextMonth};