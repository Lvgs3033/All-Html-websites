let No1 = document.getElementById('ipnumber1');
let No2 = document.getElementById('ipnumber2');
let button = document.getElementById('btn');
let ans = document.getElementById('calculate-ans');
var change = document.getElementById('change');
let reset = document.getElementById('rst-btn');

change.addEventListener('click', function(){
    let temp;
    temp = from.value;
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
    
        if(fromselected === 'Meter')
    { 
        if(toselected === 'Meter'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number * 100;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = number / 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number * 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * (10**6);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * (10**9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / 1609.34).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = number * 1.09361
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = number * 3.28084;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = number * 39.37;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Centimeter')
    {
        if(toselected === 'Centimeter'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number / 100;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = number / 100000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number * 10;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * 10000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * (10**7);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / 160934).toFixed(9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = (number / 91.44).toFixed(4)
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = (number / 30.48).toFixed(4);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = (number / 2.54).toFixed(4);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Kilometer')
    {
        if(toselected === 'Kilometer'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number * 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number * 100000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number * 1000000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * (10**9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * (10**12);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number * 0.621371);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = (number * 1093.61);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = (number * 3280.84);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = (number * 39370.1);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Milimeter')
    {
        if(toselected === 'Milimeter'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number / 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = number / 1000000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number / 10;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * (10**6);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / 1609344).toFixed(9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = (number / 914.4).toFixed(6)
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = (number / 304.8).toFixed(4);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = (number / 25.4).toFixed(5);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Micrometer')
    {
        if(toselected === 'Micrometer'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number / (1e+6);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = number / (1e+9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number / 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number / 10000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / (1.609e+9)).toExponential(3);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = (number / 914400).toExponential(4)
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = (number / 304800).toExponential(4);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = (number / 25400).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Nanometer')
    {
        if(toselected === 'Nanometer'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number / (10**9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = number / (10**12);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number / (10**6);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number / (10**7);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number / 1000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = parseFloat((number / 1609344000000).toFixed(16));
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = parseFloat((number / 914400000).toFixed(13))
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = parseFloat((number / 304800000).toFixed(12));
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = parseFloat((number / 25400000).toFixed(11));
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Mile')
    {
        if(toselected === 'Mile'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number * 1609.34;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = number * 1.60934;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number * 1609344;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number * 160934;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * 1609344000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = (number * 1609344000000).toExponential(4);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = number * 1760;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = number * 5280;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = number * 63360;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Yard')
    {
        if(toselected === 'Yard'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number * 0.9144;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = (number / 1093.61).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number * 914.4;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number * 91.44;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * 91440000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * 91440000000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / 1760).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = number * 3;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = number * 36;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Foot')
    {
        if(toselected === 'Foot'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = number * 0.3048;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = (number / 3281).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = number * 304.8
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number * 30.48;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * 304800;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * 304800000;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / 5280).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = number / 3;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Inch'){
            answer = number * 12;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
    else if(fromselected === 'Inch')
    {
        if(toselected === 'Inch'){
            ans.innerText = `${number} ${fromselected}`;
        }
        else if(toselected === 'Meter'){
            answer = (number / 39.37).toFixed(5);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Kilometer'){
            answer = (number / 39370).toFixed(8);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Milimeter'){
            answer = (number * 25.4).toFixed(2);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Centimeter'){
            answer = number * 2.54;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Micrometer'){
            answer = number * 25400;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Nanometer'){
            answer = number * (2.54e+7);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Mile'){
            answer = (number / 63360).toFixed(9);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Foot'){
            answer = number / 12 ;
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
        else if(toselected === 'Yard'){
            answer = (number / 36).toFixed(5);
            ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
        }
    }
}
    
    });

    reset.addEventListener('click', function(){
        document.getElementById('input').value = '';
        ans.innerText = ""
    })
