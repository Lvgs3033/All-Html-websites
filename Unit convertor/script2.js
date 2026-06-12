let No1 = document.getElementById('ipnumber1');
let No2 = document.getElementById('ipnumber2');
let button = document.getElementById('btn');
let ans = document.getElementById('calculate-ans');
var change = document.getElementById('change');
let reset = document.getElementById('rst-btn');

change.addEventListener('click', function(){
    let temp;
    temp = No1.value;
    No1.value = No2.value;
    No2.value = temp;
});

button.addEventListener('click', function() {
    let number = document.getElementById('input').value;
    let fromselected = No1.value;
    let toselected = No2.value;
    let answer;

    if(number == ''){
        alert('Please Enter any Number First');
    }
    else{
        if(fromselected == 'Celsius')
        {
            if(toselected == 'Celsius'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Fahrenheit'){
                answer = (number * (9/5)) + 32;
                ans.innerText = `${number}\u00B0C = ${answer}\u00B0F`;
            }
            else if(toselected == 'Kelvin'){
                answer = parseFloat(number) + 273.15;
                ans.innerText = `${number}\u00B0C = ${answer}\u00B0K`;
            }
        }
        else if(fromselected == 'Fahrenheit')
        {
            if(toselected == 'Fahrenheit'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Celsius'){
                answer = ((number - 32) * (5/9)).toFixed(2);
                ans.innerText = `${number}\u00B0CF = ${answer}\u00B0C`;
            }
            else if(toselected == 'Kelvin'){
                answer = (((number - 32) * (5/9)) + 273.15).toFixed(2);
                ans.innerText = `${number}\u00B0F = ${answer}\u00B0K`;
            }
        }
        else if(fromselected == 'Kelvin')
        {
            if(toselected == 'Kelvin'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Celsius'){
                answer = (parseFloat(number) - 273.15).toFixed(2);
                ans.innerText = `${number}\u00B0K = ${answer}\u00B0C`;
            }
            else if(toselected == 'Fahrenheit'){
                answer = (((number - 273.15) * (9/5)) + 32).toFixed(2);
                ans.innerText = `${number}\u00B0K = ${answer}\u00B0F`;
            }
        }
    }
});