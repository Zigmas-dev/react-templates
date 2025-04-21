import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
} from "date-fns";
import { lt } from "date-fns/locale";
import "./calendar.scss";

// Pavyzdiniai vardadieniai ir sodinimo patarimai
const data = {
  "2025-04-21": {
    vardadieniai: ["Anzelmas", "Konradas", "Konstantinas"],
    sodinimas: "Tinkamas metas sėti ridikėlius ir salotas."
  },
  "2025-04-22": {
    vardadieniai: ["Lenita", "Zenonas"],
    sodinimas: "Galima sodinti pomidorus į šiltnamį."
  }
  // Galima pridėti daugiau datų...
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => (
    <div className="calendar-header">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        {"<"}
      </button>
      <h2>{format(currentMonth, "MMMM yyyy", { locale: lt })}</h2>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        {">"}
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="calendar-day-name" key={i}>
          {format(addDays(startDate, i), "EEEEEE", { locale: lt })}
        </div>
      );
    }

    return <div className="calendar-days">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            className={`calendar-cell ${
              !isSameMonth(day, monthStart) ? "disabled" : ""
            } ${isSameDay(day, selectedDate) ? "selected" : ""}`}
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="calendar-row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="calendar-body">{rows}</div>;
  };

  const formatDateKey = (date) => format(date, "yyyy-MM-dd");

  const selectedData = data[formatDateKey(selectedDate)];

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      <div className="calendar-info">
        <h3>
          {format(selectedDate, "yyyy-MM-dd")} –{" "}
          {format(selectedDate, "EEEE", { locale: lt })}
        </h3>

        {selectedData ? (
          <>
            <p><strong>Vardadieniai:</strong> {selectedData.vardadieniai.join(", ")}</p>
            <p><strong>Ką sodinti:</strong> {selectedData.sodinimas}</p>
          </>
        ) : (
          <p>Šiai dienai informacijos nėra.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
