import "../styles/contact.scss";

const ContactForm = () => {
  return (
    <section id="contcat" className="contact">
      <h2>Susisiekite</h2>
      <form>
        <input type="text" placeholder="Jūsų vardas" required />
        <input type="email" placeholder="El. paštas" required />
        <textarea placeholder="Jūsų žinutė" required></textarea>
        <button type="submit">Siųsti</button>
      </form>
    </section>
  );
};

export default ContactForm;