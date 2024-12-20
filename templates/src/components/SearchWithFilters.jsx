import { useState } from "react";
import "./searchwithfilters.scss";

const SearchWithFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);

  const items = [
    { id: 1, name: "Kėdė", category: "baldai", price: 50, rating: 4 },
    { id: 2, name: "Stalas", category: "baldai", price: 150, rating: 5 },
    { id: 3, name: "Lempa", category: "interjeras", price: 30, rating: 3 },
    { id: 4, name: "Kilimas", category: "interjeras", price: 80, rating: 4 },
    { id: 5, name: "Kavos aparatas", category: "technika", price: 200, rating: 5 },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "low" && item.price < 100) ||
      (priceFilter === "high" && item.price >= 100);
    const matchesRating = item.rating >= ratingFilter;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="search-with-filters">
      <div className="filters">
        <input
          type="text"
          placeholder="Ieškoti..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">Visos kategorijos</option>
          <option value="baldai">Baldai</option>
          <option value="interjeras">Interjeras</option>
          <option value="technika">Technika</option>
        </select>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">Visos kainos</option>
          <option value="low">Iki 100€</option>
          <option value="high">100€ ir daugiau</option>
        </select>
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(Number(e.target.value))}
        >
          <option value={0}>Visi reitingai</option>
          <option value={3}>3 žvaigždutės ir daugiau</option>
          <option value={4}>4 žvaigždutės ir daugiau</option>
          <option value={5}>Tik 5 žvaigždutės</option>
        </select>
      </div>

      <div className="results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="result-item">
              <h3>{item.name}</h3>
              <p>Kategorija: {item.category}</p>
              <p>Kaina: {item.price}€</p>
              <p>Reitingas: {item.rating} ⭐</p>
            </div>
          ))
        ) : (
          <p>Rezultatų nerasta</p>
        )}
      </div>
    </div>
  );
};

export default SearchWithFilters;
