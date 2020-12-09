import React, { useEffect, useState } from "react";

const colors = {
  MainLight: "#e2f5f9",
  MainDark: "#bbdce3",
};

const ChangeView = () => {
  const [color, setColor] = useState(colors.MainDark);
  useEffect(() => {
    document.body.style.background = color;
  }, [color]);
  const [color2, setColor2] = useState(colors.MainLight);
  useEffect(() => {
    document.getElementById("add_task").style.background = color2;
  }, [color2]);

  return (
    <>
      <div
        style={{ backgroundColor: colors.transparent }}
        className={"search_task"}
        value={color}
        onClick={() => {
          setColor(colors.MainLight);
          setColor2(colors.MainDark);
        }}
      >
        <div>Etsi tehtäviä</div>
      </div>
    </>
  );
};

export default ChangeView;
