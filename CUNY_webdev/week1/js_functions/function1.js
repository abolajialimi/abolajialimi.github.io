
// Object to store data for both people
const peopleData = {
    1: { name: "Peter",mass: null, height: null },
    2: {  name: "Lucas", mass: null, height: null }
  };

  let lucasHigherBMI = null; // Variable to store Lucas's higher BMI if applicable


function saveData() {
const person = document.getElementById('personSelect').value;
const mass = parseFloat(document.getElementById('mass').value);
const height = parseFloat(document.getElementById('height').value);
const result = document.getElementById('result');

if (!mass || !height || height <= 0) {
    result.textContent = "Please enter valid values.";
    return;
}
peopleData[person].mass = mass;
peopleData[person].height = height;


result.textContent = `Saved data for ${peopleData[person].name}: Mass = ${mass}kg, Height = ${height}m tall.`;

console.log("Your BMI is:", result.textContent)
}
console.log("Your BMI is:", result.textContent)

function showData() {
    const result = document.getElementById('result');
    const p1 = peopleData[1];
    const p2 = peopleData[2];
  
    result.innerHTML = `
      <strong>Stored Data:</strong><br>
      Peter - Mass: ${p1.mass ?? 'N/A'}kg, Height: ${p1.height ?? 'N/A'}m<br>
      Lucas - Mass: ${p2.mass ?? 'N/A'}kg, Height: ${p2.height ?? 'N/A'}m
    `;
  }

  function calculateBMI() {
    const result = document.getElementById('result');
    const peter = peopleData?.[1];
    const lucas = peopleData?.[2];
  
    if (peter?.mass && peter?.height && lucas?.mass && lucas?.height) {
      const peterBMI = peter.mass / (peter.height ** 2);
      const lucasBMI = lucas.mass / (lucas.height ** 2);
      const lucasHigherBMI = lucasBMI > peterBMI;
  
      result.innerHTML = `
        The BMI of Peter is ${peterBMI.toFixed(2)}.<br>
        The BMI of Lucas is ${lucasBMI.toFixed(2)}.<br>
        Lucas’s BMI is higher than Peter’s: ${lucasHigherBMI}.
      `;
    } else {
      result.textContent = "Please make sure both people's data is saved to calculate BMI.";
    }
  }
  


  function calculateBMI2() {
    const result = document.getElementById('result');
    const peter = peopleData[1];
    const lucas = peopleData[2];
  
    if (peter?.mass && peter?.height && lucas?.mass && lucas?.height) {
      const peterBMI = peter.mass / (peter.height ** 2);
      const lucasBMI = lucas.mass / (lucas.height ** 2);
  
      const lucasHigher = lucasBMI > peterBMI;
  
      result.textContent = lucasHigher
        ? `The BMI of Lucas (${lucasBMI.toFixed(2)}) is higher than Peter's (${peterBMI.toFixed(2)}).`
        : `The BMI of Peter (${peterBMI.toFixed(2)}) is higher than Lucas's (${lucasBMI.toFixed(2)}).`;
  
      return lucasHigher;
    } else {
      result.textContent = "Missing data: Make sure both Peter and Lucas have valid mass and height.";
      return null;
    }
  }
  





// Temperature converter


const tempData = {
    1: { name: "Fahrenheit",tempvalue: null },
    2: {  name: "Celsius", tempvalue: null }
  };




function convertTemp() {
const type = document.getElementById('conversionType').value;
const tempInput = parseFloat(document.getElementById('temperature').value);
const tempresult = document.getElementById('tempresult');


if (isNaN(tempInput)) {
    tempresult.textContent = "Please enter a valid temperature.";
    return;
  }
  if (type === 'cToF') {
    const celsius = tempInput;
    const fahrenheit = (celsius * 9/5) + 32;
    tempresult.textContent = `🌡️ ${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;



} else {
    const fahrenheit = tempInput;
    const celsius = (fahrenheit - 32) * 5/9;
    tempresult.textContent = `🌡️ ${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
  }
}


const cToF = celsius => ((celsius * 9 / 5) + 32).toFixed(2);
    const fToC = fahrenheit => ((fahrenheit - 32) * 5 / 9).toFixed(2);

    const convertTemperature = (value, type) => {
      return type === 'cToF'
        ? `${value}°C is ${cToF(value)} °F`
        : `${value}°F is ${fToC(value)} °C`;
    };

    document.getElementById('convertBtnArrow').addEventListener('click', () => {
        const type = document.getElementById('conversionType').value;
        const tempInput = parseFloat(document.getElementById('temperature').value);
        const tempresult = document.getElementById('tempresult');

      if (isNaN(tempInput)) {
        tempresult.textContent = 'Please enter a valid temperature.';
      } else {
        tempresult.textContent = convertTemperature(tempInput, type);
      }
    });
