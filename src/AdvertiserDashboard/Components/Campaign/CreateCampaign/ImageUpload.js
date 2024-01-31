import React, { useState } from "react";
import "./ImageUpload.css";

const MultipleImageUpload = () => {
  const [images, setImages] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  const handleImageChange = async (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const newImages = [];
      const newImagePaths = [];

      for (const file of files) {
        const reader = new FileReader();

        const loadImage = () =>
          new Promise((resolve) => {
            reader.onload = () => resolve(reader.result);
          });

        reader.readAsDataURL(file);
        newImages.push(await loadImage());
        newImagePaths.push(file.name);
      }

      setImages((prevImages) => [...prevImages, ...newImages]);
      setImagePaths((prevPaths) => [...prevPaths, ...newImagePaths]);
    }
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      {images.map((image, index) => (
        <div key={index} className="image-preview-container">
          <img
            src={image}
            alt={`Preview ${index + 1}`}
            className="image-preview"
          />
          {imagePaths.length > 0 && (
            <p className="image-path">Image Path: {imagePaths[index]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultipleImageUpload;
