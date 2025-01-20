import { describe, it, expect, test } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../src/converter.js";

describe('celsiusToFahrenheit tests', ()=> {
    // 0C should be 32F
    it('should convert 0C to 32F', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });
    // 100C should be 212F
    it('should convert 100C to 212F', () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });
    // "25"C should be 77
    it('should convert "25C" as String to 77F', () => {
        expect(celsiusToFahrenheit("25")).toBe(77);
    });
    //-40C should be -40F
    it('should convert -40C to -40F', () => {
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });
});

describe('fahrenheitToCelsius tests', ()=> {
    /* Just did the inverse to make things easier of Celsius*/

    it('should convert 32F to 0C', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });
    
    it('should convert 212F to 100C', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });
    
    it('should convert 77F as String to "25C"', () => {
        expect(fahrenheitToCelsius(77)).toBe(Number("25"));
    });
    
    it('should convert -40F to -40C', () => {
        expect(fahrenheitToCelsius(-40)).toBe(-40);
    });
});