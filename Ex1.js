/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */

var oldString = "xxxyzzaaayy";
var int = 2;

const removeRepeated = (string, limit) => {
    
    var newString = "";
    var cont= 0;
    var len = string.length + 1;
    var c = string[0];

    for ( var i = 1; i < len; i++ ) {
        if (c == string[i]){
            cont++; 
        } else if ( c != string[i] && cont < limit) {
            cont++;
            newString += string[i-1].repeat(cont);
            cont = 0;
        } else if(c != string[i] && cont >= limit){
            newString += string[i-1].repeat(limit) 
            cont = 0;    
        } 
        c = string[i];
    }
    return newString;
}

export default removeRepeated;

console.log(removeRepeated(oldString,int))
