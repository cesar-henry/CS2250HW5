import React from "react";

const Neko = () => {
  const [nekos, setNekos] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://nekos.best/api/v2/dance?amount=4`)
      .then((res) => res.json())
      .then((json) => {
        setNekos(json.results);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Please stand by </h1>
      </div>
    );
  }

  return (
    <div className="Neko">
      <h1> This is completely safe for work </h1>
      {nekos.map((neko) => (
        <img width="50%" src={neko.url}/>
      ))}
      
    </div>
  );
};

export default Neko;