import { useState, useEffect } from "react";
import Image from "./components/image";
import SignOrLog from "./components/signOrLog";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(true);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, []); //every time user's value changes, useEffect will run again

  return (
    <div className="App">
      <SignOrLog setter={setUser} />
      <h1>{user}</h1>
      {user &&
        photos.map((item, i) => {
          return <Image key={i} author={item.author} url={item.download_url} />;
        })}
    </div>
  );
};

export default App;
