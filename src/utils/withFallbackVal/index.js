// Other funcs for different data types may be added like withFallbackStrVal etc.

export const withFallbackNumVal = num => num || 0;

export const isNaN = val => Number.isNaN(Number(val));
