// let arr = [
//     "А роза упала на лапу Азора",
//     "Ого",
//     "А Собака боса",
//     "Привет, мир",
//     "А Собака боса",
//     "Лёша на полке клопа нашёл",
//     "Я арка края",
// ];


// // arr.filter(checkAdult);
// // arr = arr.split("").reverse().join("");
// // alert(arr);
// arr = arr.filter(checkAdult);
// function checkAdult(s) {
//     for (let j = 0; j < s.length; j++) {
//         s = s.toLowerCase().replace(" ", "");
//     }
//     return s == s.split("").reverse().join("") ? alert(s) : false;
// }
// // function reverseString(str) {
// //     str = str.split("").reverse().join("");
// //     alert(str);

// // }


// for (let i = 0; i < arr.length; i++) {
//     checkAdult(arr[i]);
// }

let arr = [
    "А роза упала на лапу Азора",
    "Ого",
    "А Собака боса",
    "Привет, мир",
    "А Собака боса",
    "Лёша на полке клопа нашёл",
    "Я — арка края",
];

function palindrom(value) {
    let a = false;
    let v = value.toLowerCase();

    //let res = v.replace(/ /g, "");

    let arrFromStr = v.split("");
    arrFromStr = arrFromStr.filter((val) => (val.trim() == "" || val == "—" ? false : true));
    //   arrFromStr = arrFromStr.filter((val) => (val == "—" ? false : true));  
    console.log(arrFromStr);
    let str = arrFromStr.join("");
    let reversedArrFromStr = arrFromStr.reverse();
    let reversedStr = reversedArrFromStr.join("");
    // if (reversedStr == str) {
    //     console.log(str);
    //     console.log(reversedStr);
    // }
    // return value > 18;
    return reversedStr == str ? false : true;
}

const palindroms = arr.filter(palindrom);

console.log(palindroms);