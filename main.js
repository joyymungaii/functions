// ALLOWANCE CALCULATOR
/*
document.getElementById("run").onclick = function () {
  let age = document.getElementById("age").value;
  let money = document.getElementById("money").value;

  if (age >= 1 && age <= 17) {
    document.getElementById("output").innerText = "Allowance is " + money;
  } else if (age >= 18 && age <= 23) {
    document.getElementById("output").innerText = "pocketmoney is " + money;
  } else if (age >= 24 && age <= 65) {
    document.getElementById("output").innerText = "Salary is " + money;
  } else {
    document.getElementById("output").innerText = "Pension is " + money;
  }

  if (age < 0) {
    document.getElementById("output").innerText = "Invalid";
  }

  if (age == "") {
    document.getElementById("output").innerText = "Enter age";
  }

  if (money === "") {
    document.getElementById("output").innerText = "!!!!";
  }
};
*/
//SALARY CALCUTOR

document.getElementById("cal").onclick = function (){
    let salary = parseInt(document.getElementById("salary").value);
    let food = parseInt(document.getElementById("food").value);
    let rent = parseInt(document.getElementById("rent").value);
    let maintenance = parseInt(document.getElementById("maintenance").value);
    let shopping = parseInt(document.getElementById("shopping").value);

    //Expenses side
    document.getElementById("output1").innerText = "Salary after food " + food;
    document.getElementById("output2").innerText = "Salary after food " + rent;
    document.getElementById("output3").innerText = "Salary after food " + maintenance;
    document.getElementById("output4").innerText = "Salary after food " + shopping;
    
    let exp = food + rent + maintenance + shopping;
    document.getElementById("exp").innerText = exp

    //Salary side
    let out1 = salary - food
    document.getElementById("out1").innerText = "Salary after food " + out1;
    let out2 = out1 - rent
    document.getElementById("out2").innerText = "Salary after rent " + out2; 
    let out3 = out2 - maintenance
    document.getElementById("out3").innerText = "Salary after maintenance " + out3;
    let out4 = out3 - shopping
    document.getElementById("out4").innerText = "Salary after shopping " + out4;

    document.getElementById("rem").innerText = "Salary remaining " + out4

}
