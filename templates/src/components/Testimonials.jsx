import PropTypes from "prop-types";
import "./testimonials.scss";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <h2>Atsiliepimai</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-message">
              &quot;{testimonial.message}&quot;
            </p>
            <div className="testimonial-author">
              <img
                src={testimonial.image || "https://via.placeholder.com/50"}
                alt={`${testimonial.name}'s avatar`}
              />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      position: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default Testimonials;
