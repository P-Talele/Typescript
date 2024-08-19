"use strict";
function isLogged(status) {
    if (status == true) {
        return 'User Logged';
    }
    else {
        return 'User Not Logged';
    }
}
var user = isLogged(false);
console.log(user);
function addition(first, second) {
    return first + second;
}
var sum = addition(12, 23);
console.log('Addition Of two Variable=' + sum);
function goodMorning(name) {
    var suffix = name ? ", ".concat(name, ".") : '.';
    return 'Good Morning' + suffix;
}
console.log(goodMorning('Sam'));
var arrowFunction = function (name, location) {
    console.log('Name=' + name + ',Location=' + location);
};
var result = arrowFunction('Prashant', 'Pune');
console.log(result);
var stars = ['Virat', 'Rohit', 'Salman'];
var resultStars = stars.map(function (item) {
    return "".concat(item, " is heros");
});
console.log(resultStars);
function noReturnType(name) {
    console.log(name);
}
var result2 = noReturnType("Prashant");
console.log(result2);
module.exports = {};
