const API_URL = "http://localhost:5000/api/v1/products";
export function getProducts() {
  return fetch(API_URL).then(res => {
    return res.json();
  });
}
export function createProduct(product) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "content-type": "application/json"
    }
  }).then(res => res.json());
}
export function getProduct(id) {
  return fetch(`${API_URL}/${id}`).then(res => res.json());
}
