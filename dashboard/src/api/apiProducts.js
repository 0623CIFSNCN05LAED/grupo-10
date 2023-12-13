const PRODUCTS_URL = "http://localhost:4001/api/products";

export async function apiProducts() {
  const response = await fetch(PRODUCTS_URL);
  const result = await response.json();

  if (result) {
    return result;
  }
  return [];
}
