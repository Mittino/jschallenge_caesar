(function(){
  "use strict";
  var _ = require('lodash');

  //input a letter
  //determine if upper or lowercase - regex?
  //Find position in alphabet
  //Move over 3

  var lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function ceasarShift(letter){
    var regexLower = new RegExp(/[/a-z]/g);
    var regexUpper = new RegExp(/[/A-Z]/g);
    if(regexLower.test(letter)){
      console.log('lowercase');
    } else if (regexUpper.test(letter)){
      console.log("uppercase");
    }

  }

ceasarShift('a');
ceasarShift('A');



  module.exports = {}

})();
