var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function sortArray(arr) {
    var numbers = [];
    var characters = [];
    // split the array into two part
    for (var i = 0; i < arr.length; i++) {
        var n = Number(arr[i]);
        if (isNaN(n) === true) {
            characters.push(arr[i]);
        }
        else {
            numbers.push(arr[i]);
        }
    }
    //sort character part
    function sortCharacters(alphabet) {
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
    var sorter = sortCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*!@_.()[]#^&%-=+');
    characters.sort(sorter);
    //sort number part
    numbers.sort(function (a, b) { return a - b; });
    //combine two part
    var orderarr = __spreadArrays(numbers, characters);
    console.log('array of numbers: ' + numbers);
    console.log('array of characters: ' + characters);
    console.log('array after sort: ' + orderarr);
}
var arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
sortArray(arr);
