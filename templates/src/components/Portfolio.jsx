import { useState } from "react";
import "./portfolio.scss";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-komercijos svetainė",
      description: "Moderni internetinė parduotuvė.",
      category: "svetainių kūrimas",
      link: "#",
    },
    {
      id: 2,
      title: "Įmonės logotipas",
      description: "Minimalistinis logotipas įmonės prekės ženklui.",
      category: "dizainas",
      link: "#",
    },
    {
      id: 3,
      title: "Tinklaraščio svetainė",
      description: "Kūrybinė svetainė tinklaraštininkams.",
      category: "svetainių kūrimas",
      link: "#",
    },
    {
      id: 4,
      title: "Reklaminis plakatas",
      description: "Profesionalus plakatas renginiui.",
      category: "dizainas",
      link: "#",
    },
    {
      id: 5,
      title: "SEO optimizacija",
      description: "SEO paslaugos jūsų svetainei.",
      category: "skaitmeninis marketingas",
      link: "#",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Mano darbai</h1>

      <div className="portfolio__filters">
        <button
          onClick={() => handleCategoryChange("all")}
          className={selectedCategory === "all" ? "active" : ""}
        >
          Visi
        </button>
        <button
          onClick={() => handleCategoryChange("svetainių kūrimas")}
          className={selectedCategory === "svetainių kūrimas" ? "active" : ""}
        >
          Svetainių kūrimas
        </button>
        <button
          onClick={() => handleCategoryChange("dizainas")}
          className={selectedCategory === "dizainas" ? "active" : ""}
        >
          Dizainas
        </button>
        <button
          onClick={() => handleCategoryChange("skaitmeninis marketingas")}
          className={
            selectedCategory === "skaitmeninis marketingas" ? "active" : ""
          }
        >
          Skaitmeninis marketingas
        </button>
      </div>

      <div className="portfolio__projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio__project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Plačiau
            </a>
          </div>
        ))}
      </div>

      <div className="portfolio__contact">
        <h2>Kontaktai</h2>
        <form>
          <input type="text" placeholder="Jūsų vardas" required />
          <input type="email" placeholder="Jūsų el. paštas" required />
          <textarea placeholder="Jūsų žinutė" rows="4" required></textarea>
          <button type="submit">Siųsti</button>
        </form>
      </div>
    </div>
  );
};

export default Portfolio;
