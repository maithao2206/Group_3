var getTwoNumber = function (number) {
   return number <10?'0'+ number : number;
}
var formatDate = function (mdate) { 
   var  month = getTwoNumber(mdate.getMonth() + 1),
        date = getTwoNumber(mdate.getDate()),
        year = mdate.getFullYear();
   return {
      date: month +'/' + date + '/' + year,
      value: mdate.toDateString().split(' ')[0],
   }
} 
var week = {
    dates:[],
    schedules:[],
    setDates: function (date) {
            var arrDates = [],
                today = new Date().valueOf(),
                milliSecsDate = 1000 * 60 * 60 * 24;
            for( var i = 0; i < 7; i++) {
                this.dates.push(formatDate(new Date(today + milliSecsDate * i)));
            } 
    },
    getIndexByDay: function (day) {
        var numOfDates = this.dates.length;
        for ( var i = 0; i< numOfDates; i++) {
            return(this.dates[i]['day']=== day)?i :(-1);
        }
    },
    initSchedules: function () {
        var numOfDates = this.dates.length;
        for ( var i = 0; i< numOfDates; i++) {
           this.schedules[i] = 'free';
        }
    },
    setScheduleByDay: function(day, schedule) {
        this.schedules[this.getIndexByDay(day)] = schedule;
    },
    isEmpty: function() {
        return this.schedules[this.getIndexByDay(day)] === 'free';
    },
    findScheduleByDay: function(day) {
        return this.schedules[this.getIndexByDay(day)];
    },
}
week.setDates();
week.initSchedules();
console.log('date',week.dates);
console.log ('Schedule',week.schedules);

