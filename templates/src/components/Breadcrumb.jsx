import "./breadcrumb.scss";

// Perkeliame breadcrumbItems į šį failą
const breadcrumbItems = [
  { label: "Pradžia", href: "/" },
  { label: "Puslapis", href: "/page" },
  { label: "Dabartinis puslapis" },
];

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <ul>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === breadcrumbItems.length - 1 ? 'active' : ''}`}>
            {index === breadcrumbItems.length - 1 ? (
              item.label
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
