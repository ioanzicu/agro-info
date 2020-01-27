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

export function timeConverterUnixToDate(UNIX_timestamp: number): string {
  const dateObj = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const year = dateObj.getFullYear();
  const month = months[dateObj.getMonth()];
  const date = dateObj.getDate();
  const hour =
    dateObj.getHours().toString().length === 1
      ? `0${dateObj.getHours()}`
      : dateObj.getHours();
  const minutes =
    dateObj.getMinutes().toString().length === 1
      ? `0${dateObj.getMinutes()}`
      : dateObj.getMinutes();
  const seconds =
    dateObj.getSeconds().toString().length === 1
      ? `0${dateObj.getSeconds()}`
      : dateObj.getSeconds();
  return (
    date + " " + month + " " + year + " " + hour + ":" + minutes + ":" + seconds
  );
}
