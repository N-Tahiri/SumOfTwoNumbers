const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

//This line is equivalent to 2 above. Try to search its equivalent with byID...
const [input3, input4] = document.querySelectorAll("input");

// Store result
const result = document.getElementById("result");

// Prepare for event listener
const wrapper = document.getElementById("inputs");

// Start event on that element wrapper above
wrapper.addEventListener("input", () => {
  let a = parseFloat(input1.value),
    b = Number(input2.value); // give same result
  let sum = a + b;
  if (isNaN(sum) && input1.value != "") {
    //alert("Please enter a valid number.");
    reset();
  } else {
    result.innerText = sum;
  }
});

// clear the inputs and the result when user type a char
function reset() {
  input1.value = 0;
  input2.value = 0;
  result.innerText = 0;
}
