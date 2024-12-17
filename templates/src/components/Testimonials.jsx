import PropTypes from "prop-types";
import "./testimonials.scss";

// Pridedame testimonialsData tiesiogiai čia
const testimonialsData = [
  {
    name: "Petras Petraitis",
    message: "Puiki svetainė, labai patogu naudotis!",
    position: "Klientas",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Monika Monikaitė",
    message: "Geriausia patirtis, kokią tik esu turėjusi!",
    position: "Vartotoja",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Tomas Tomaitis",
    message: "Puikus dizainas ir funkcionalumas!",
    position: "Partneris",
    image: "https://via.placeholder.com/50",
  },
];

const Testimonials = ({ testimonials = testimonialsData }) => {
  return (
    <div className="testimonials">
      <h2>Atsiliepimai</h2>
      <div className="testimonials-container">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
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
          ))
        ) : (
          <p>Nėra jokių atsiliepimų.</p>
        )}
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
  ),
};

export default Testimonials;
