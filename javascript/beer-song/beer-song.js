var BeerSong = function () {};


BeerSong.prototype.verse = function (start) {
    var filler = start + ' bottles of beer on the wall, ' + start + ' bottles of beer.\nTake one down and pass it around, ';
    if (start >= 3) {
        return filler + (start - 1) + " bottles of beer on the wall.\n";
    } else if (start === 2) {
        return filler + '1 bottle of beer on the wall.\n';
    } else if (start === 1) {
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    } else if (start === 0) {
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
};

BeerSong.prototype.sing = function (start, stop) {
    if (!stop) {
        var count = start;
    } else {
        var count = start - stop;
    }

    var string = "";
    for (var i = 0; i <= count; i++) {
        string += BeerSong.prototype.verse(start) + '\n';
        start -= 1;
    }
    return string;
};

module.exports = BeerSong;