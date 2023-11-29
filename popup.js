document.getElementById('calculator').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateCompoundInterest();
});

document.getElementById('clear-btn').addEventListener('click', function(event) {
  event.preventDefault();
  clearFields();
});

function calculateCompoundInterest() {
  var principal = Number(document.getElementById('principal').value);
  var interestRate = Number(document.getElementById('interestRate').value);
  var compoundingPeriods = Number(document.getElementById('compoundingPeriods').value);
  var timePeriod = Number(document.getElementById('timePeriod').value);
  var timeUnit = document.getElementById('timeUnit').value;
  
  if (isNaN(principal) || isNaN(interestRate) || isNaN(compoundingPeriods) || isNaN(timePeriod)) {
    alert('Please enter valid numbers for all fields!');
    return;
  }
  
  var result = calculateCompoundInterestHelper(principal, interestRate, compoundingPeriods, timePeriod, timeUnit);
  document.getElementById('result').innerHTML = '$' + result.toFixed(2);
}

function calculateCompoundInterestHelper(principal, interestRate, compoundingPeriods, timePeriod, timeUnit) {
  var rate = interestRate / 100;
  var periodsPerYear;
  if (timeUnit === 'year') {
    periodsPerYear = 1;
  } else if (timeUnit === 'month') {
    periodsPerYear = 12;
  } else if (timeUnit === 'week') {
    periodsPerYear = 52;
  } else if (timeUnit === 'day') {
    periodsPerYear = 365;
  }
  var totalPeriods = compoundingPeriods * (periodsPerYear / 12) * (timePeriod / (timeUnit === 'year' ? 1 : (timeUnit === 'month' ? 12 : (timeUnit === 'week' ? 52 : 365))));
  var result = principal * Math.pow((1 + rate / compoundingPeriods), totalPeriods * compoundingPeriods);
  return result;
}

function clearFields() {
  document.getElementById('principal').value = '';
  document.getElementById('interestRate').value = '';
  document.getElementById('compoundingPeriods').value = '1';
  document.getElementById('timePeriod').value = '';
  document.getElementById('timeUnit').value = 'year';
  document.getElementById('result').innerHTML = '';
}
