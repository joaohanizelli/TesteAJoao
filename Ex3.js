/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */
var str1 = "dacb";
var str2 = "gdab";

const lettersSum = (string1, string2) => {
        
    var newStr1 = string1.split('').sort().join('');
    var newStr2 = string2.split('').sort().join('');

    var i1 = newStr1.length - 1;
    var i2 = newStr2.length - 1;

    var maior1 = newStr1.charCodeAt(i1) - 96;
    var maior2 = newStr2.charCodeAt(i2) - 96;
    var menor1 = newStr1.charCodeAt(0) - 96;
    var menor2 = newStr2.charCodeAt(0) - 96;

    var resultado = (maior1*menor2)+(maior2*menor1)
      
    return resultado;
}

export default lettersSum;

console.log(lettersSum(str1,str2))