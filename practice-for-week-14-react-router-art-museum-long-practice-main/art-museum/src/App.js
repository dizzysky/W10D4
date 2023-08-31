import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/GalleryNavigation/index.js";
import GalleryView from "./components/GalleryView/index.js";
import { Route, Switch, Redirect} from "react-router-dom"

function App() {
  return (
    <>
        <GalleryNavigation galleries={harvardArt.records} />
        

      <Switch>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records}/>
        </Route>
        <Route exact path='/'>
          <h2>"Harvard Art Museum"</h2>
          <p> "Look, but Don't Touch. Please select a
          Gallery in the navigation bar."</p>
        </Route>
        <Route path='/error' >
          <h2>"Page Not Found"</h2>
        </Route>
        <Redirect to='/error'/>
      </Switch>
    </>
  );
}

// console.log(harvardArt)
export default App;
