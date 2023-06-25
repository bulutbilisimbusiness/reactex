import "./App.css";

import Cat from "./components/Cat";
function App() {
  return (
    <div>
      <Cat
        name="Puffy"
        img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
        color="beige"
      />
      <Cat
        name="Garfield"
        img="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg"
        color="grey"
      />
      <Cat
        name="Sari"
        img="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg"
      />
    </div>
  );
}

export default App;
