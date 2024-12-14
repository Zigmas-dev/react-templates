import PropTypes from "prop-types";
import "./breadcrumb.scss";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
            {index === items.length - 1 ? (
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

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
