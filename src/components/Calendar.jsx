import React, { useState } from "react";

function Calendar() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(start, end);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name=""
          id=""
          min="2022-10-01"
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="date"
          name=""
          id=""
          min={start}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button type="submit">Gimme datez n timz</button>
      </form>
    </div>
  );
}

export default Calendar;
