/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */

var oldString = "?x?yzza?y?";
var int = 2;
const replaceChar = (string, times) => {
    
    
    var newString = "";
    var finalString = "";
    var cont = 1;
    var len = string.length - 1 ;
    var c = string[len];

    for ( var i = len; i >= 0; i-- ) {
        if ( c != '?' && cont == 1 ){
            newString += string[i]       
        } else if (c == "?" && string[i-1] != "?" && i != 0){
            newString += string[i-1].repeat(cont*times)
            cont = 1;
        } else if(c == "?" && i==0){
            newString += newString[0].repeat(times)
        } else if (c == "?" && string[i-1] == "?" && i != 0){
            cont++;
        }
        c = string[i-1];
    }
    for (var i = newString.length - 1; i >= 0; i--) {
            finalString += newString[i];
    }    
    return finalString;
}

export default replaceChar;

console.log(replaceChar(oldString,int))

