"use client";

import { Calendar } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const SidebarCalendar = () => {
  return (
    <div>
      <p className="bg-primary p-1 text-center text-white">Calendar</p>
      <div className="border border-[#f1f1f1]">
        <Calendar
          className="sidebar__calendar pt-1.5"
          compact
          bordered
          defaultValue={new Date()}
        />
      </div>
    </div>
  );
};

export default SidebarCalendar;
