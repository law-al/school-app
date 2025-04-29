import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  function handleOnChangeView(selectedView: View) {
    setView(selectedView);
  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={{
          work_week: true,
          day: true,
        }}
        view={view}
        onView={handleOnChangeView}
        style={{ height: "98%" }}
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 17, 0, 0)}
      />
    </>
  );
};

export default BigCalendar;
