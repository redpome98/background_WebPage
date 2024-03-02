import React, { useState, useEffect } from "react";

const Clock = () => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedHour = `${localTime.getHours()}`;
  const formattedMinutes = `${localTime.getMinutes()}`;
  return (
    <div>
      <div className="timeSet">
        <div className="Hour">{formattedHour}</div>
        <div className="divider">:</div>
        <div className="Minute">{formattedMinutes}</div>
      </div>
    </div>
  );
};

export default Clock;
