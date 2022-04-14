//Very Easy

let num1 = 23;
let num2 = 49;

if (num1 > num2)
{
    let numDiff = num1-num2
    console.log(`The Difference between ${num1} and ${num2} is ${numDiff}`)
}

else{
    let numDiff = num2-num1
    console.log(`The Difference between ${num2} and ${num1} is ${numDiff}`)
}


//Easy

let dude1 = "Johnny";
let dude2 = "Jonas";

if (dude1.length > dude2.length)
{
    let nameDiff = dude1.length - dude2.length
console.log(`The name ${dude1} is longer than ${dude2} by ${nameDiff} character(s)`)
}

else{
    let nameDiff = dude2.length - dude1.length
    console.log(`The name ${dude2} is longer than ${dude1} by ${nameDiff} character(s)`)

};




//Hard

function add(p1, p2)
    {
        return p1 + p2;
    }


function subtract(p1, p2)
    {
        return p1 - p2;
    }


function multiply(p1, p2)
    {
        return p1*p2;
    }


function divide(p1, p2)
    {
        return p1/p2;
    }

console.log(divide(8,4))

