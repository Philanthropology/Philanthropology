let str;

let strReverse = (str) => {
    str = document.getElementById("stringInput").value;

    let splitStr = str.split("");
    splitStr.reverse();
    let reverseStr = splitStr.join("");

    document.getElementById("reversedHome").innerHTML = reverseStr;

}