import {NavLink} from "react-router-dom";
import './GalleryNavigation.css'


function GalleryNavigation({ galleries }) {


    const galleryList = galleries.map((gallery) => {
        return (
            <NavLink key={gallery.id} to={`/galleries/${gallery.id}`} >
                {gallery.name}
            </NavLink> 
        )
    })

    return(
        <nav>
            <NavLink
                to="/">
                Home
            </NavLink>
            <h1>Galleries</h1>
            {galleryList}
        </nav>
    );
}


export default GalleryNavigation;