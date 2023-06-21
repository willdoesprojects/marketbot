import React, { useState, useEffect } from 'react';

const images = [
  'https://m.media-amazon.com/images/I/61fZ+YAYGaL._SX679_.jpg',
  'https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png',
  'https://m.media-amazon.com/images/I/61fZ+YAYGaL._SX679_.jpg',
  'https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png',
  'https://i5.walmartimages.com/asr/3592de4c-2d2d-4285-afbf-f0508775bd58_2.bb23225176016b4d5ce96c4efed80382.jpeg',
  'https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg?w=2000',
  'https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=',
  'https://i5.walmartimages.com/asr/fda1d77e-44ec-4477-93b5-73d46cea8a44.69c68548f31c1b08884960b47b111b8e.jpeg',
  'https://img.freepik.com/premium-photo/slice-bread-white-background-isolated-with-clipping-path_41722-1877.jpg?w=2000',
  'https://media.istockphoto.com/id/856586464/photo/two-slices-of-avocado.jpg?s=612x612&w=0&k=20&c=xaXU4gxSZx2nTn5XfTnWlpaJ8OMbh0MKRXMASoDJEJo=',
  'https://media.istockphoto.com/id/182372395/photo/chicken-breasts-against-white-background.jpg?s=612x612&w=0&k=20&c=kfjWyZmpZhtT8fVWjxBZGP35DIsn40VKoVJDt7MeVfc=',
  'https://thumbs.dreamstime.com/b/fresh-tomatoes-cut-white-background-4712908.jpg',
  'https://media.istockphoto.com/id/876503894/photo/strawberry-with-sliced-half-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=S77l7MU6n9RHER46JKoLfdCdgXr7YCz0ZtWLvptXElQ=',
  'https://media.istockphoto.com/id/458541553/photo/jif-penut-butter.jpg?s=612x612&w=0&k=20&c=idTK8DbbOFV3EX9H0x0GGPbhzLdTaimA5YsXepIv_GY=',
  'https://i.pinimg.com/736x/58/42/10/584210d3e40ed884f21ae7306437a2ec.jpg',
  'https://img.freepik.com/premium-photo/fresh-salmon-fillet-with-basil-white-background_120872-2192.jpg',
  'https://i5.walmartimages.com/asr/bd4bb7c1-43a8-4f75-b1be-f3c2d98fff56.39dda363a61de8a41ddd6521b2385d45.jpeg',
  'https://www.vtfoodbank.org/wp-content/uploads/2015/11/the-superb-health-benefits-of-cucumber1.jpg',
  'https://img.freepik.com/premium-photo/red-onion-isolated-white-background_319514-4769.jpg?w=2000',
  'https://thumbs.dreamstime.com/b/raw-rice-bag-spilled-white-background-raw-white-rice-bag-white-background-close-up-146707505.jpg',
  'https://p1.pxfuel.com/preview/875/956/872/pasta-products.jpg',
  'https://i.fbcd.co/products/resized/resized-750-500/e27a033b054b5f2517d9fa32a2b9c21a41422287f276855a8e2c7a7c3450d680.jpg',
  'https://thumbs.dreamstime.com/b/bowl-raw-oatmeal-white-background-150142005.jpg',
  'https://media01.stockfood.com/largepreviews/MzQ2MzA0Mjg2/11171106-Vanilla-Ice-Cream-Cone-on-a-White-Background.jpg',
  'https://thumbs.dreamstime.com/b/fresh-tasty-pizza-white-background-clipping-path-included-85746388.jpg',
  "https://pixy.org/src/107/1076174.jpeg",
  "https://i5.walmartimages.com/asr/3c0d7636-b6a6-4509-84f5-1e92e378b353.6423f1b82ff702c18a7c0b59166a4a54.jpeg",
  "https://static.vecteezy.com/system/resources/previews/005/739/981/large_2x/ondoliva-extra-virgin-olive-oil-on-white-background-free-photo.jpg",
  'https://media.istockphoto.com/id/1067295372/photo/salt-shaker-on-white-background.jpg?s=170667a&w=0&k=20&c=SuwEWTeccrVWYQaZEI5IqiQNIW_ESHkV37PqCApbz6s=',
  
];

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % images.length);
    }, 5000); // change the image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className = "ease-in-out">
    <img
      src={images[currentSlide]}
      alt="slideshow"
      className="mx-auto object-contain"
      style={{ maxHeight: "500px",
               maxWidth: "500px" }}
    />
    </div>
  );
}

export default SlideShow;
