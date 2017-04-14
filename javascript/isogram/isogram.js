var isogram = function (word) {
    this.word = word.replace(/[^A-Za-zöüßä\xe9]/g, '').toLowerCase();
    //required use of \xe9 instead of é
};

var test = function (word) {
    return new Set(word).size === word.length;
};

isogram.prototype.isIsogram = function () {
    return test(this.word);
};

module.exports = isogram;