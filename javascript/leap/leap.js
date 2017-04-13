//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
    this.year = year;
};

var checkYear = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

Year.prototype.isLeap = function () {
    return checkYear(this.year);
};

module.exports = Year;