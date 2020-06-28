
var queen = {
    position: { x: "1", y: "4" }
};
let temp, temp2;

var tp = new Array;
tp = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];

function updateValue(dir, steps) {


    switch (dir) {

        case "s":

            temp = parseInt(queen.position.x) + steps;

            if (temp > 8 && temp < 0) {
                console.log("Outside ")

            }
            else {

                document.getElementById("showposition").innerHTML = tp[temp][queen.position.y];

            }
            break;
        case "e":
            temp = parseInt(queen.position.y) + steps;

            if (temp > 8 && temp < 0) {
                console.log("Outside ")
            }
            else {

                document.getElementById("showposition").innerHTML = tp[queen.position.x][temp];
            }
            break;
        case "w":
            temp = queen.position.y - steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside ")
            }
            else {
                document.getElementById("showposition").innerHTML = tp[queen.position.x][temp];

            }
            break;
        case "n":
            temp = queen.position.x - steps;
            if (temp > 8 && temp < 0) {
                console.log("Outside ")
            }
            else {

                document.getElementById("showposition").innerHTML = tp[temp][queen.position.y];
            }
            break;
        case "se": temp = parseInt(queen.position.x) + steps;
            temp2 = parseInt(queen.position.y) + steps;
            console.log(temp);
            console.log(temp2);
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ");
            }
            else {

                document.getElementById("showposition").innerHTML = tp[temp][temp2];
            }
            break;
        case "es": temp = parseInt(queen.position.x) + steps;
            temp2 = parseInt(queen.position.y) + steps;

            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ");
            }
            else {

                document.getElementById("showposition").innerHTML = tp[temp][temp2];
            }
            break;
        case "sw": temp = parseInt(queen.position.x) + steps;
            temp2 = queen.position.y - steps;
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ")

            }
            else {

                document.getElementById("showposition").innerHTML = tp[temp][temp2];

            }
            break;
        case "ws": temp = parseInt(queen.position.x) + steps;
            temp2 = queen.position.y - steps;
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ")

            }
            else {

                document.getElementById("showposition").innerHTML = tp[temp][temp2];

            }
            break;
        case "ne":
            temp = queen.position.x - steps;
            temp2 = parseInt(queen.position.y) + steps;
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ")
            }
            else {
                document.getElementById("showposition").innerHTML = tp[temp][temp2];
            }
            break;
        case "en": temp = queen.position.x - steps;
            temp2 = parseInt(queen.position.y) + steps;
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ")
            }
            else {
                document.getElementById("showposition").innerHTML = tp[temp][temp2];
            }
            break;
        case "nw":
            temp = queen.position.x - steps;
            temp2 = queen.position.y - steps;
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ")
            }
            else {
                document.getElementById("showposition").innerHTML = tp[temp][temp2];
            }
            break;
        case "wn": temp = queen.position.x - steps;
            temp2 = queen.position.y - steps;
            if ((temp > 8 && temp < 0) || (temp2 > 8 && temp2 < 0)) {
                console.log("Outside ")
            }
            else {
                document.getElementById("showposition").innerHTML = tp[temp][temp2];
            }
            break;

        default: break;
    }
}

function butn() {
    var inp = document.getElementById("value").value;

    var value = inp.split(" ");

    value.forEach(element => {
        let dir = element.slice(0, element.length - 1);
        let steps = Number(element.slice(element.length - 1));
        console.log(dir);
        console.log(steps);
        updateValue(dir, steps);
    });

}