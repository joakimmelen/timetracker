import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar as CalendarComp } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getTasksForDate } from "../utils/api";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const updateTaskList = async () => {
    const result = await getTasksForDate(selectedDate);
    setTasks(result);
  };

  const updateSelectedDate = () => {
    setSelectedDate(date.toString().split(" ").slice(1, 4).join("-"));
  };

  const onChange = (date) => {
    setDate(date);
    updateTaskList();
    updateSelectedDate();
  };

  return (
    <div>
      <CalendarComp showWeekNumbers onChange={onChange} value={date} />
      {tasks.data ? (
        <ul>
          {tasks.data.map((task) => console.log(task.taskTitle))}
          {tasks.data.map((task) => {
            <li>{task.taskTitle}</li>;
          })}
        </ul>
      ) : (
        <p>Please select a date..</p>
      )}
    </div>
  );
}

export default Calendar;
