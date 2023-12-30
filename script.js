let clear = document.querySelector('#clr-btn')
let calculate = document.querySelector('#calculate-btn');


calculate.addEventListener("click", function(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if (weight && height) {

        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Your BMI is: ' + bmi;
  
        if (bmi < 18.5) {
          resultElement.innerHTML += ' - Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          resultElement.innerHTML += ' - Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
          resultElement.innerHTML += ' - Overweight';
        } else {
          resultElement.innerHTML += ' - Obesity';
        }
      } 
      else {
        alert('Please enter both weight and height.');
      }
  })

  clear.addEventListener("click", function(){
    location.reload();
  })