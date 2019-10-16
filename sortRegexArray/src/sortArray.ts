const regexSpecials = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/gm;
const regexNumber = /[0-9]/gm;
const regexCharacters = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/gm 
function getNumber(arr : any){
    var numbers= new Array; 
    for(var i= 0; i< arr.length; i++ ){
        if (arr[i].match(regexNumber)!= null){
            numbers.push(arr[i]);
        }
    }
    return numbers; 
}
function getCharacters(arr : any){
    var characters = new Array;
    for(var i=0; i< arr.length; i++){
        if(arr[i].match(regexCharacters)!=null){
            characters.push(arr[i])
        }
    }
    return characters;
}
function getSpecialCharacters(arr : any){
    var specialCharacters = new Array;
    for(var i=0; i< arr.length; i++){
        if(arr[i].match(regexSpecials)!=null){
            specialCharacters.push(arr[i])
        }
    }
    return specialCharacters;
}

function mySort(alphabet : any)
{
    return function(a : any, b : any) {
        var index_a = alphabet.indexOf(a[0]),
        index_b = alphabet.indexOf(b[0]);

        if (index_a === index_b) {
            // same first character, sort regular
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        } else {
            return index_a - index_b;
        }
    }
}
let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
var sortCharacters = mySort('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
var sortSpecialCharacters = mySort('-!$%^&*()_+|~=`{}[:;<>?,.@#]');
let number = getNumber(arr);
number.sort(function(a, b){return a-b});
let character = getCharacters(arr).sort(sortCharacters);
let special = getSpecialCharacters(arr).sort(sortSpecialCharacters);
let orderarr = [...number,...character, ...special];
console.log(orderarr);