const imageSrs =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

export const addImage = (imgSrc, callback) => {
  const imageElem = document.createElement('img');
  const pageElem = document.querySelector('.page');
  imageElem.src = imgSrc;
  imageElem.setAttribute('alt', 'My photo');
  pageElem.append(imageElem);
  
  const onLoadImage = () => {
    callback(null, imageElem)
  }

  const onErrorImage = () => {
    callback('Image load is failed');
  }

  imageElem.addEventListener('load', onLoadImage);
  imageElem.addEventListener('error', onErrorImage);
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

addImage(imageSrs, onImageLoaded);

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );