var DnaTranscriber = function () { };

DnaTranscriber.prototype.toRna = function (x) {
    var RNA = "";
    var flag = true;
    for (var i = 0; i < x.length; i++) {
        if (x[i] === "A") { RNA += "U"; }
        else if (x[i] === "T") { RNA += "A"; }
        else if (x[i] === "C") { RNA += "G"; }
        else if (x[i] === "G") { RNA += "C"; }
        else { flag = false; }
    }
    if (flag) { return RNA; }
    else { throw new Error('Invalid input'); }
};

module.exports = DnaTranscriber;