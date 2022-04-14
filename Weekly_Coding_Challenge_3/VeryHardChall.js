let inputNum1 = prompt("Enter your first number");
let inputOp = prompt("Enter an operator out of +, -, *, /: ");
let inputNum2 = prompt("Enter your second number");

if (inputOp == "+"){
    alert(Number(inputNum1)+Number(inputNum2))
}
else if(inputOp == "-"){
    alert(Number(inputNum1)-Number(inputNum2))
}
else if(inputOp == "*"){
    alert(Number(inputNum1)*Number(inputNum2))
}
else if(inputOp == "/"){
    alert((Number(inputNum1))/(Number(inputNum2)))
}
else{
    alert("ERROR: INVALID OPERATOR/NUMBER")
}