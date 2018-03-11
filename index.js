var moment  = require('moment');

function nextMonth(){
    console.log(moment().add(1, 'M'));
}

nextMonth();