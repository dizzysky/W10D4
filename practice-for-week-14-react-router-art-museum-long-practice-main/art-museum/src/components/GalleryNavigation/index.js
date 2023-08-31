import {NavLink} from "react-router-dom";



function GalleryNavigation({ galleries }) {
    console.log(galleries);

    const galleryList = galleries.map((gallery) => {
        return (
            <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
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