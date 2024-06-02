import { createContext, useState, useEffect } from "react";

export const GalleryContext = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch("/photos.json");
      const data = await response.json();
      const photosWithFavorites = data.photos.map(photo => ({
        ...photo,
        isFavorite: false,
        id: photo.id
      }));
      setPhotos(photosWithFavorites);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavorite = (id) => {
    setPhotos(prevPhotos => 
      prevPhotos.map(photo => 
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <GalleryContext.Provider value={{ photos, toggleFavorite }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default ContextProvider;
