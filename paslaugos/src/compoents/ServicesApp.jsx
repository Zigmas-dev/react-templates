import { usestate } from "react";
import ServiceCard from "./ServiceCard";
import OrderForm from "./OrederForm";
import Reviews from "./Reviews";
import "./services.scss";

const ServicesApp = () => {
  const [services] = usestate([
    { id: 1, name: "Grožio paslaugos", description: "Makiažas, šukuosenos", price: "50€" },
    { id: 2, name: "Namų valymas", description: "Pilnas namų tvarkymas", price: "30€" },
    { id: 3, name: "Santechnika", description: "Remontas ir priežiūra", price: "40€" },
  ]);

  const [selectedService, setSelectedService] = usestate(null);
  const [reviews, setReviews] = usestate([]);

  const addReview = (review) => {
    setReviews({...reviews, review})
  };

  return (
    <div className="services-app">
      <h1>Paslaugų užsakymo sistema</h1>
      <div className="services-list">
        {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOrder={setSelectedService} />
        ))}
      </div>

      {selectedService && (
        <OrderForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      <Reviews reviews={reviews} addReview={addReview} />
    </div>
  );
};

export default ServicesApp;
