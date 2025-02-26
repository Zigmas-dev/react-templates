import "../styles/services.scss";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Mūsų paslaugos</h2>
      <div className="service-list">
       <div className="service">
        <h3>Interneto Svetainės</h3>
        <p>Kuriame modernias ir patogias svetaines jūsų verslui.</p>
       </div>
       <div className="service">
        <h3>El. parduotuvės</h3>
        <p>Padedame sukurti funkcionalias el. parduotuves.</p>
       </div>
       <div className="service">
        <h3>SEO Optimizacija</h3>
        <p>Didiname svetainės matomumą Google paieškoje.</p>
       </div>
      </div>
    </section>
  );
};

export default Services;