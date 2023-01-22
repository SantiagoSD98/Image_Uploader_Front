import React, { useState, useEffect } from "react";

import { sendImage } from "./services/imageServices";

import Loader from "./components/Loader/Loader";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import ImageVisualizer from "./components/ImageVisualizer/ImageVisualizer.jsx";

const App = () => {

  const [error, setError] = useState('');
  const [pathImage, setPathImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  useEffect(() => {
    if (imageFile) {
      setIsLoading(true);
      sendImage(imageFile).then((response) => {
        const { pathImg } = response.data;
        setError("");
        setIsLoading(false);
        setPathImage(pathImg);
        setIsImageUploaded(true);
      }).catch((error) => {
        setIsLoading(false);
        setError(error.response.data.message);
      });
    }
  }, [imageFile]);

  const handleFileChange = (event) => {
    if (!event.target.files[0]) {
      return;
    }

    setImageFile(event.target.files[0]);
  };

  return (
    <>
      {!isImageUploaded && !isLoading && <ImageUploader handleFile={handleFileChange} error={error} />}
      {isLoading && <Loader />}
      {isImageUploaded && !isLoading && <ImageVisualizer imgUploaded={imageFile} pathImg={pathImage} />}
    </>
  );
}

export default App;
