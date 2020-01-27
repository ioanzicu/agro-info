// Capitalize the string from 'hello' -> 'Hello'
export function capitalizeString(str: string): string {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1, word.length))
    .join(" ");
}

export function replaceUnderscore(str: string): string {
  return str.replace(/_/gi, " ");
}

export const kelvinToCelsius = (celcius: number): string =>
  (celcius - 273.15).toFixed(2);
