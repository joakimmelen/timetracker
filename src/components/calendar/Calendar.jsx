import React from "react";
import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

function Calender() {
  return (
    <div>
      {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
      <FullCalendar />
    </div>
  );
}

export default Calender;
