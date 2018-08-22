const API_URL =
  "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

export function getData() {
  return fetch(API_URL)
    .then(res => res.json())
    .then(result => {
      return result;
    });
}
