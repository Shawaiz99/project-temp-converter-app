// (°C → °F): F = (C * 9/5) + 32
// (°F → °C): C = (F - 32) * 5/9

export function celsiusToFahrenheit(celsius) {
    const c = Number(celsius)
    return (c * 9/5) + 32;
}

export function fahrenheitToCelsius(fahrenheit) {
    const f = Number(fahrenheit)
    return (f - 32) * 5/9;
}