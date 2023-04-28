function addNumbers() {
    // Get the values entered into the input fields
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
  
    // Calculate the sum
    var sum = num1 + num2;
  
    // Display the result in an alert
    alert("SUM: " + sum);
  }


  function subtractNumbers() {
    // Get the values entered into the input fields
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
  
    // Calculate the sum
    var dif = num1 - num2;
  
    // Display the result in an alert
    alert("DIFFERENCE : " + dif);
  }



  function multiplyNumbers() {
    // Get the values entered into the input fields
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
  
    // Calculate the sum
    var pro = num1 * num2;
  
    // Display the result in an alert
    alert("PRODUCT : " + pro);
  }



  function divideNumbers() {
    // Get the values entered into the input fields
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
  
    // Calculate the sum
    const div = num1 / num2;
  
    // Display the result in an alert
    alert("QUOTIENT: " + div);
  }

  function clearTextboxes() {
    var txt1 = document.getElementById("txtNum1");
    var txt2 = document.getElementById("txtNum2");

    //
    txt1.value = "";
    txt2.value = "";
  }