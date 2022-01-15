import { addImage } from "./addImage.js";

const validUrl =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

export const addImageV2 = (url) => {
  const p = new Promise((resolve, reject) => {

    const onImageLoaded = (error, imgElem) => {
      if (error) {
        reject(new Error(error))
        return;
      }

      const { width, height } = imgElem;
      resolve({width, height})
      const sizeElem = document.querySelector('.image-size');
      sizeElem.textContent = `${width} x ${height}`;
    };

    addImage(url, onImageLoaded)
  })
  return p
};

addImageV2('https://server.com/image.png')
  .then((data) => console.log(data)) 
  .catch((error) => console.log(error)); 