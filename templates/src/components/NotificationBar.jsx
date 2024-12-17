import "./notificationbar.scss";

const NotificationBar = () => {
  const message = "Tai yra pranešimas apie naują funkcionalumą!";
  const link = "https://example.com";
  const linkText = "Sužinokite daugiau";
  const type = "info";

  return (
    <div className={`notification-bar ${type}`}>
      <span>{message}</span>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default NotificationBar;
