const imageSrs =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    const pageElem = document.querySelector('.page');
    imageElem.src = imgSrc;
    imageElem.setAttribute('alt', 'My photo');
    pageElem.append(imageElem);

    const onLoadImage = () => {
      const { width, height } = imageElem;
      resolve({ width, height });
    };
    const onErrorImage = () => {
      reject(new Error('Image load is failed...'));
    };
    imageElem.addEventListener('load', onLoadImage);
    imageElem.addEventListener('error', onErrorImage);
  });
  return p;
};

addImage(imageSrs)
  .then((data) => {
    const sizeElem = document.querySelector('.image-size');
    const { width, height } = data;
    sizeElem.textContent = `${width} x ${height}`;
  })
  .catch((error) => console.log(error));