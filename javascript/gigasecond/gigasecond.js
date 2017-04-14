var gigasecond = function (dateTime) {
    this.dateTime = dateTime.valueOf();
};

var date = function (dateTime) {
    return new Date(dateTime + 1000000000000);
};

gigasecond.prototype.date = function () {
    return date(this.dateTime);
};

module.exports = gigasecond;