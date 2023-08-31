import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/GalleryNavigation/index.js";
import GalleryView from "./components/GalleryView/index.js";
import { Route } from "react-router-dom"

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={harvardArt.records}/>
      </Route>
    </>
  );
}

// console.log(harvardArt)
export default App;
