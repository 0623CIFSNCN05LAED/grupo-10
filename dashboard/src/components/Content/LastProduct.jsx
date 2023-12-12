import { useEffect, useState } from "react";

export default function LastProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/api/products");
      const result = await response.json();
      setProducts(result.products);
    };
    fetchData();
  }, []);

  const [productsMeta, setProductsMeta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/api/products");
      const result = await response.json();
      setProductsMeta(result.meta);
    };
    fetchData();
  }, []);

  const countProducts = productsMeta.count;
  console.log("countProd: ", countProducts);
  const lastProductIndex = countProducts - 1;
  console.log(lastProductIndex);
  console.log(products);
  // const lastProductUrl = products[9].detail;
  // console.log(lastProductUrl);
}
