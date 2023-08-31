import { useParams } from 'react-router-dom';



function GalleryView ( {galleries}){
    console.log(galleries);
    const { galleryId } = useParams();

    let gallery = galleries.find((gal) => gal.gallerynumber === galleryId);
    console.log("g", gallery);
    return(
        <div>
            <h1>Hello From Gallery View</h1>
            <h2>{gallery.name}</h2>
            <p></p>
        </div>
    )
}

export default GalleryView