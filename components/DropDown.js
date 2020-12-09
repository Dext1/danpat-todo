import React, { useEffect, useState } from "react";

const priorities = {
  pri1: "1",
  pri2: "2",
  pri3: "3",
  pri4: "4",
  pri5: "5",
};

const DropDown = () => {
  const [priority, setPriority] = useState(priorities.pri1);
  useEffect(() => {
    document.body.style.background = priority;
  }, [priority]);
  return (
    <>
      <select
        className="drop_down"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        {Object.entries(priorities).map(([name, value]) => (
          <option key={`${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>
      <p>{priority}</p>
    </>
  );
};

export default DropDown;
