let arr = [
    "А роза упала на лапу Азора",
    "Ого",
    "А Собака боса",
    "Привет, мир",
    "А Собака боса",
    "Лёша на полке клопа нашёл",
    "Я арка края",
];


// arr.filter(checkAdult);
// arr = arr.split("").reverse().join("");
// alert(arr);
arr = arr.filter(checkAdult);
function checkAdult(s) {
    for (let j = 0; j < s.length; j++) {
        s = s.toLowerCase().replace(" ", "");
    }
    return s == s.split("").reverse().join("") ? alert(s) : false;
}
// function reverseString(str) {
//     str = str.split("").reverse().join("");
//     alert(str);

// }


for (let i = 0; i < arr.length; i++) {
    checkAdult(arr[i]);
}