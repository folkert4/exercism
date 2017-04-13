var bob = function () {};

bob.prototype.hey = function (sentence) {
    sentence  = sentence.replace(/[^A-Za-z?,.!\xfc\xe4\xc4\xdc]/g, '');    //strip the bs
    var upper = sentence.replace(/[^A-Z\xc4\xdc]/g, '');   //create string with only capital letters
    var lower = sentence.replace(/[^a-z\xfc\xe4]/g, '');   //create string with only lower letters
    if (lower.length === 0 && upper.length > 0) {          // test for yelling (capslock)
        return 'Whoa, chill out!';
    }
    else if (sentence.endsWith('?')) {                      //test for question
        return 'Sure.';
    }
    else if (sentence.length === 0) {                       // test for empty and whitespace (replace on line 4 fixes cases:("  ")
        return 'Fine. Be that way!';            
    }
    else { return 'Whatever.'; }                            // default responce
};

module.exports = bob;

