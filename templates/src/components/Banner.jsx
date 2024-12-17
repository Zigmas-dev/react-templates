import "./banner.scss";

const Banner = () => {
  const text = "Sveiki atvykę! Mūsų svetainėje rasite daugybę naudingos informacijos.";
  const speed = "15s";
  const backgroundColor = "#4caf50";
  const textColor = "#fff";
  const fontSize = "20px";

  return (
    <div className="banner" style={{ backgroundColor }}>
      <div
        className="banner-text"
        style={{
          animationDuration: speed,
          color: textColor,
          fontSize,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Banner;
