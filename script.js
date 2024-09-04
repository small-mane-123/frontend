let number = prompt("Please enter a number:");
number = Number(number);


if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


// for loop


for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// while loop


let u = 0;
while (u <= 10) {
    console.log(u);
    u++;
}
// do...while loop


let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);