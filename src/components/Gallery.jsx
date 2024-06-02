import { useContext, useState } from "react";
import { GalleryContext } from "../context/ContextProvider";
import { Card, Button } from "react-bootstrap";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, toggleFavorite } = useContext(GalleryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  return (
    <div className="gallery-container">
      <div className="row">
        {currentPhotos.map((photo, index) => (
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
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => setCurrentPage(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
