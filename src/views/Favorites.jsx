import { useContext } from "react";
import { GalleryContext } from "../context/ContextProvider";
import { Card, Button } from "react-bootstrap";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos, toggleFavorite } = useContext(GalleryContext);
  const favoritePhotos = photos.filter(photo => photo.isFavorite);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="row">
        {favoritePhotos.map((photo, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card className="position-relative">
              <Card.Img variant="top" src={photo.src.large} />
              <Button 
                variant="link" 
                className="position-absolute top-0 end-0 m-2 p-0" 
                onClick={() => toggleFavorite(photo.id)}
                style={{ cursor: 'pointer' }}
              >
                <IconHeart filled={photo.isFavorite} />
              </Button>
              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <Card.Text className="bg-dark text-white p-2">{photo.alt}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
