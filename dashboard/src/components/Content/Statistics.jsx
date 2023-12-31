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

  const countBrands = () => {
    if (products && products.countByBrand) {
      const brands = Object.values(products.countByBrand);
      return brands.length;
    }
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/api/users");
      const result = await response.json();
      setUsers(result.meta);
    };
    fetchData();
  }, []);

  const countUsers = users.count;

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
      title: "Marcas de Productos",
      value: countBrands(),
      color: "orange",
      icon: "bi bi-award",
    },
    {
      id: 4,
      title: "Total de Usuarios",
      value: countUsers,
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
