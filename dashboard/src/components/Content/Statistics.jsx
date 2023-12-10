import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

export default function Statistics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/api/products");
      const result = await response.json();
      setProducts(result.meta);
    };
    fetchData();
  }, []);

  const countProducts = products.count;
  const countCategories = () => {
    if (products && products.countByCategory) {
      const categories = Object.values(products.countByCategory);
      return categories.length;
    }
    return 0;
  };
  console.log("categories: ", countCategories);

  const myStats = [
    {
      id: 1,
      title: "Cantidad de Productos",
      value: countProducts,
      color: "cornflowerblue",
      icon: "bi bi-laptop",
    },
    {
      id: 2,
      title: "Categorías de Productos",
      value: countCategories(),
      color: "orange",
      icon: "bi bi-tags-fill",
    },
    {
      id: 3,
      title: "Total de Usuarios",
      value: "0 hardcodeado",
      color: "green",
      icon: "bi bi-people-fill",
    },
  ];

  return (
    <section className="content">
      <h2 className="mt-3">Estadísticas</h2>
      <div className="info-boxes">
        {myStats.map((stat) => (
          <SmallCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
    </section>
  );
}
