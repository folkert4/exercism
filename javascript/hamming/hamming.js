var Hamming = function () {};


Hamming.prototype.compute = function (a,b) {
    if (a.length === b.length) {
        ham = 0;
        for (var i = 0; i <= a.length; i++) {
            if (a[i] !== b[i]) {
                ham += 1;
            }
        }
        return ham;
    } else {
        throw new Error('DNA strands must be of equal length.');
    }
};

module.exports = Hamming;