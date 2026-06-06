import "./App.css";
import ArrayStateDemo from "./ArrayStateDemo";
import BatchStateDemo from "./BatchStateDemo";
import ColorSwitchDemo from "./ColorSwitchDemo";
import Gallery from "./Gallery";
import RecipeList from "./RecipeList";
import StateDemo from "./StateDemo";

function App() {
  return (
    <main className="gallery-page">
      <StateDemo />
      <hr />
      <BatchStateDemo />
      <hr />
      <ArrayStateDemo />
      <hr />
      <ColorSwitchDemo />
      <hr />
      <RecipeList />
      <hr />
      <Gallery />
    </main>
  );
}

export default App;
