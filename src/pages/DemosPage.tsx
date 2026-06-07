import ArrayStateDemo from "../features/demos/ArrayStateDemo";
import BatchStateDemo from "../features/demos/BatchStateDemo";
import CacheDemo from "../features/demos/CacheDemo";
import ColorSwitchDemo from "../features/demos/ColorSwitchDemo";
import RefDemo from "../features/demos/RefDemo";
import StateDemo from "../features/demos/StateDemo";
import Gallery from "../features/gallery/Gallery";
import RecipeList from "../features/recipes/RecipeList";

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
