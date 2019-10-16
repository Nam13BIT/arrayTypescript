"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var regexSpecials = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/gm;
var regexNumber = /[0-9]/gm;
var regexCharacters = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/gm;
function getNumber(arr) {
    var numbers = new Array;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].match(regexNumber) != null) {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}
function getCharacters(arr) {
    var characters = new Array;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].match(regexCharacters) != null) {
            characters.push(arr[i]);
        }
    }
    return characters;
}
function getSpecialCharacters(arr) {
    var specialCharacters = new Array;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].match(regexSpecials) != null) {
            specialCharacters.push(arr[i]);
        }
    }
    return specialCharacters;
}
function mySort(alphabet) {
    return function (a, b) {
        var index_a = alphabet.indexOf(a[0]), index_b = alphabet.indexOf(b[0]);
        if (index_a === index_b) {
            // same first character, sort regular
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        }
        else {
            return index_a - index_b;
        }
    };
}
var arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
var sortCharacters = mySort('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
var sortSpecialCharacters = mySort('-!$%^&*()_+|~=`{}[:;<>?,.@#]');
var number = getNumber(arr);
number.sort(function (a, b) { return a - b; });
var character = getCharacters(arr).sort(sortCharacters);
var special = getSpecialCharacters(arr).sort(sortSpecialCharacters);
var orderarr = __spreadArrays(number, character, special);
console.log(orderarr);
