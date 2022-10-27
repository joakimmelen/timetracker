import React, { useEffect, useState } from "react";
import { Calendar as CalendarComp } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getTimesForDate } from "../utils/api";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [list, setList] = useState([]);
  const { removeTime } = useTimeTrackContext();

  const updateList = async () => {
    const result = await getTimesForDate(
      date.toString().split(" ").slice(1, 4).join("-")
    );
    setList(result);
  };

  useEffect(() => {
    updateList();
  }, [date]);

  const handleClick = (id) => {
    removeTime(id);
    setTimeout(() => {
      updateList();
    }, 100);
  };

  return (
    <div>
      <CalendarComp showWeekNumbers onChange={setDate} value={date} />
      {list.data ? (
        <ul>
          {list.data.map((time) => {
            return (
              <li key={time.id}>
                {`${time.taskTitle} for ${time.totalTimeInSeconds}s @ ${time.startTime}`}
                <button onClick={() => handleClick(time.id)}>x</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Please select a date..</p>
      )}
    </div>
  );
}

export default Calendar;
