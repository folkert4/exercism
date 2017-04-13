var Pangram = function (sentence) {
    this.sentence = sentence.replace(/[^A-Za-z]/g, '').toLowerCase();
};

var checkPan = function (sentence) {
    var alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
        n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    };
    if (sentence.length >= 26) {
        for (var i = 0; i < sentence.length; i++) {
            try {
                alphabet[sentence[i]] += 1;
            }
            catch (ignore) {
                //ignore if not in the alphabet (underscores and special chars)
            }
        }
        for (var key in alphabet) {
            if (alphabet[key] === 0) { return false; }
        }
    } else { return false; }
    return true;
};

Pangram.prototype.isPangram = function () {
    return checkPan(this.sentence);
};

module.exports = Pangram;