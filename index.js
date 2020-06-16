
/* Input:User inputs principle, annual rate, number of years, and periods per year.
 * Processing: Determines what the future value of investment will be.
 * Output: The future value.
 */
function doFV() {
   // Get user input from text field.
   var input_1 = document.getElementById('one').value;
   var input_2 = document.getElementById('two').value;
   var input_3 = document.getElementById('three').value;
   var input_4 = document.getElementById('four').value;

   // Convert user input into numbers.
   var principle = parseFloat(input_1);
   var annualRate = parseFloat(input_2);
   var years = parseFloat(input_3);
   var periodsPerYear = parseFloat(input_4);

   var calculation = computeFutureValue(principle, annualRate, years, periodsPerYear);

    // Display the calculation to the user.
    document.getElementById('outputDiv').innerHTML = calculation;
}

// Calculates Future Value
function computeFutureValue(principle, annualRate, years, periodsPerYear) {
var n = years * periodsPerYear;
var r = annualRate/periodsPerYear;
var FV = principle * (1 + r)**n;
return FV;
}

