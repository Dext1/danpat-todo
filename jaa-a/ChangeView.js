const App = () => {
  let [ThebackgroundColor, couldYouPleaseChangeIt] = React.useState(
    "lightblue"
  );

  React.useEffect(() => {
    document.body.style.backgroundColor = getRandomColor();
  });

  const changeBgColor = () => {
    // change the f'n color
    couldYouPleaseChangeIt(getRandomColor());
  };

  return (
    <main>
      <div style={{ backgroundColor: ThebackgroundColor }} className="circle" />
      <button onClick={changeBgColor}>Change Color</button>
    </main>
  );
};

const getRandomColor = () => {
  return "#" + Math.random().toString(16).slice(2, 8);
};
