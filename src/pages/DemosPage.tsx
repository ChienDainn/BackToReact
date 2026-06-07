import "../App.css";
import ArrayStateDemo from "../ArrayStateDemo";
import BatchStateDemo from "../BatchStateDemo";
import CacheDemo from "../CacheDemo";
import ColorSwitchDemo from "../ColorSwitchDemo";
import Gallery from "../Gallery";
import RecipeList from "../RecipeList";
import RefDemo from "../RefDemo";
import StateDemo from "../StateDemo";

export default function DemosPage() {
  return (
    <div className="gallery-page">
      <h1>🧪 Demos</h1>
      <StateDemo />
      <hr />
      <BatchStateDemo />
      <hr />
      <ArrayStateDemo />
      <hr />
      <CacheDemo />
      <hr />
      <RefDemo />
      <hr />
      <ColorSwitchDemo />
      <hr />
      <RecipeList />
      <hr />
      <Gallery />
    </div>
  );
}
