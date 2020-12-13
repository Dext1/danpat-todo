import React, { useState } from "react";

const priorities = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
};

const Priority = () => {
  const [priority, setPriority] = useState();
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
    </>
  );
};

export default Priority;
