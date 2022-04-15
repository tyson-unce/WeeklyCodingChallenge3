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




let inputNum1 = prompt("Enter your first number");
let inputOp = prompt("Enter an operator out of +, -, *, /: ");
let inputNum2 = prompt("Enter your second number");

if (inputOp == "+"){
    alert(add(Number(inputNum1), Number(inputNum2)))
}
else if(inputOp == "-"){
    alert(subtract(inputNum1, inputNum2))
}
else if(inputOp == "*"){
    alert(multiply(inputNum1, inputNum2))
}
else if(inputOp == "/"){
    alert(divide(inputNum1, inputNum2))
}
else{
    alert("ERROR: INVALID OPERATOR/NUMBER")
}