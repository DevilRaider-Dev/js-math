const output = document.getElementById("output");

output.innerHTML = "--- Level 1_1 ---<br><br>";

let roundedPI = Math.PI.toFixed(2);
output.innerHTML += roundedPI + "<br><br>";

output.innerHTML += "--- Level 1_2 ---<br><br>";

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
function round(arr) {
    arr.forEach(e => {
        output.innerHTML += Math.round(e) + "<br>";
    });
}

round(array);
output.innerHTML += "<br>";

output.innerHTML += "--- Level 1_3 ---<br><br>";

let randomNum = Math.random();
let randomNum1_10 = Math.round(Math.random() * 10);
let randomNum1_100 = Math.round(Math.random() * 100);

output.innerHTML += randomNum + "<br>";
output.innerHTML += randomNum1_10 + "<br>";
output.innerHTML += randomNum1_100 + "<br><br>";

output.innerHTML += "--- Level 1_4 ---<br><br>";

let numArray = [393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488]

output.innerHTML += Math.min(...numArray) + "<br>";
output.innerHTML += Math.max(...numArray) + "<br><br>";

output.innerHTML += "--- Level 2_1 ---<br><br>";

function roundTo(n, r) {
    return n.toFixed(r);
}
output.innerHTML += roundTo(3.1415926535, 5) + "<br><br>";

output.innerHTML += "--- Level 2_2 ---<br><br>";

output.innerHTML += `
<input type="number" name="" id="input" placeholder="Number between 1-10">
<button onclick="checkNum()">Check</button>
<label for="" id="num"></label>`

function checkNum() {
    let num = Math.round(Math.random() * 10);
    let input = document.getElementById("input").value

    document.getElementById("num").innerHTML = num == input ? "richtig" : "falsch: " + num + " war die richtige Zahl";
}

output.innerHTML += "<br><br>--- Level 2_3 ---<br><br>";

let eltern = [66, 55];
let geschwister = [26, 16, 18];
let fussballer = [36, 34, 29, 30, 28, 35, 33]

function minimalWerte(arr) {
    return Math.min(...arr);
}
output.innerHTML += `Bei deinen Eltern ist die jüngste Person ${minimalWerte(eltern)} alt.<br>`;
output.innerHTML += `Bei deinen Geschwistern und dir ist die jüngste Person ${minimalWerte(geschwister)} alt.<br>`;
output.innerHTML += `Und bei den Fussballern ist der jüngste Spieler ${minimalWerte(fussballer)} alt.<br>`;