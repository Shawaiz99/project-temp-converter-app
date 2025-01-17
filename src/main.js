// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
//Import converter
import {celsiusToFahrenheit, fahrenheitToCelsius} from './converter.js'; 

// DOM Elements
const form = document.getElementById('converterForm');
const tempValue = document.getElementById('tempValue');
const tempType = document.getElementById('tempType');
const result = document.getElementById('result');

const C2F = 'c2f'

// Add Listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const currentTempValue = tempValue.value;
  const conversionType = tempType.value;

  let output;
  
  if(conversionType ==='C2F') {
    // Logic of Conversion
    const fahrenheit = celsiusToFahrenheit(currentTempValue);
    
    output = `${currentTempValue}C = ${fahrenheit}°F`;
  } else {
    const celsius = fahrenheitToCelsius(currentTempValue);
    output = `${currentTempValue}C = ${celsius}°C`;
  }

  result.textContent = output;

});





// const app = document.getElementById('root')

// app.innerHTML = `
//   <div class="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
//     <!-- Spinner with Yollo logo as background -->
//     <div
//       class="spinner-border"
//       role="status"
//       style="
//         width: 6rem;
//         height: 6rem;
//         border-width: 0.4rem;
//         background: url('./yollo-logo.svg') center/contain no-repeat;
//         border-color: transparent;
//       "
//     >
//       <span class="visually-hidden">Loading...</span>
//     </div>
//     <!-- Your greeting -->
//     <h1 class="mt-3">Hello Yoller!</h1>
//   </div>
// `

