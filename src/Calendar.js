import { useEffect } from "react"
import Calendar from "./Calendar-scripts"

export default function ShowCalendar() {
    useEffect(() => { /*waiting for all to finish to start*/
        setTimeout(() => {
        Calendar();
        }, 0);
    }, []);
    return (
        <div className="calendar-container">
        <div className="calendar-header">
          <button className="nav-btn" id="prevMonth">{"<"}</button>
          <span className="month-year" id="monthYear">January 2026</span>
          <button className="nav-btn" id="nextMonth">{">"}</button>
        </div>
        <div className="weekdays">
          <span>Sun</span><span>Mon</span><span>Tue</span>
          <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>
        <div className="days-grid" id="daysGrid"></div>
        </div>
    );
}