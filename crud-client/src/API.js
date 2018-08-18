export function getProducts() {
  return fetch('http://localhost:5000/api/v1/products').then(res => {
    return res.json();
  });
}
