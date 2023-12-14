import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

export default function Categories() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4001/api/products");
      const result = await response.json();
      setCategories(result.meta.countByCategory);
    };
    fetchData();
  }, []);
  console.log(categories);

  const myStats = [];

  Object.entries(categories).forEach(([title, index]) => {
    myStats.push({
      key: index + 1,
      title: title,
      value: categories[title],
      color: "cornflowerblue",
      icon: "bi bi-tag",
    });
  });

  return (
    <section className="content">
      <h2 className="mt-3">Categorías</h2>
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
