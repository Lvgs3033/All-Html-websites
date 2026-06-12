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
        if(fromselected == 'Minute')
        {
            if(toselected == 'Minute'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Second'){
                answer = number * 60;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Milisecond'){
                answer = number * 60000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Hour'){
                answer = (number / 60).toFixed(5);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Day'){
                answer = (number / 1440).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Week'){
                answer = (number / 10080).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Month'){
                answer = (number / 43800).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / 525600).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
        }
        else if(fromselected == 'Second')
        {
            if(toselected == 'Second'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = (number / 60).toFixed(6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Milisecond'){
                answer = number * 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Hour'){
                answer = (number / 3600).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Day'){
                answer = (number / 86400).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Week'){
                answer = (number / 604800).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Month'){
                answer = (number / (2.628e+6)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / (3.154e+7)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
        }
        else if(fromselected == 'Milisecond')
        {
            if(toselected == 'Milisecond'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = (number / 60000).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Second'){
                answer = number / 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Hour'){
                answer = (number / (3.6e+6)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Day'){
                answer = (number / (8.64e+7)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Week'){
                answer = (number / (6.048e+8)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Month'){
                answer = (number / (2.628e+9)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / (3.154e+10)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
        }
        else if(fromselected == 'Hour')
        {
            if(toselected == 'Hour'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = number * 60;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Milisecond'){
                answer = (number * (3.6e+6)).toExponential(2);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Second'){
                answer = number * 3600;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Day'){
                answer = (number / 24).toFixed(7);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Week'){
                answer = (number / 168).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Month'){
                answer = (number / 730).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / 8760).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
        }
        else if(fromselected == 'Day')
        {
            if(toselected == 'Day'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = number * 1440;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Milisecond'){
                answer = (number * (8.64e+7)).toExponential(2);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Second'){
                answer = number * 86400;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Hour'){
                answer = (number * 24);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Week'){
                answer = (number / 7).toFixed(6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Month'){
                answer = (number / 30.417).toFixed(7);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / 365).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Week')
        {
            if(toselected == 'Week'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = number * 10080;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Milisecond'){
                answer = (number * (6.048e+8)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Second'){
                answer = (number * 604800).toExponential(3);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Hour'){
                answer = (number * 168);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Day'){
                answer = (number * 7);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Month'){
                answer = (number / 4.345).toFixed(6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / 52.143).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Month')
        {
            if(toselected == 'Month'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = number * 43800;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Milisecond'){
                answer = (number * (2.628e+9)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Second'){
                answer = (number * (2.628e+6)).toExponential(3);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Hour'){
                answer = (number * 730);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Day'){
                answer = (number * 30.417);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Week'){
                answer = (number * 4.345);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Year'){
                answer = (number / 12).toFixed(7);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Year')
        {
            if(toselected == 'Year'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Minute'){
                answer = number * 525600;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Milisecond'){
                answer = (number * (3.154e+10)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Second'){
                answer = (number * (3.154e+7)).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Hour'){
                answer = number * 8760;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Day'){
                answer = number * 365;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Week'){
                answer = (number * 52.143).toFixed(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected} Approx.`;
            }
            else if(toselected == 'Month'){
                answer = number * 12;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
    }
});

reset.addEventListener('click', function(){
    document.getElementById('input').value = '';
    ans.innerText = ""
})