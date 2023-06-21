import SearchBar from '../components/SearchBar';
import SearchData from '../SearchData.json'
import SlideShow from '../components/SlideShow';
import React, { useState, useEffect } from 'react';
import '../components/home.css';

function HomePage() {

    const groceries = [
        {
            id: 1,
            name: "Bananas",
            price: 0.25,
            image: "https://m.media-amazon.com/images/I/61fZ+YAYGaL._SX679_.jpg"
            
          },
          {
            id: 2,
            name: "Apples",
            price: 0.45,
            image: "https://media.istockphoto.com/id/622795204/photo/red-delicious-apples.jpg?s=612x612&w=0&k=20&c=-uu4u0m62t1nz3kcOVkallOgSWoOj_KtcVTCIlyfpXY="
          },
          {
            id: 3,
            name: "Eggs",
            price: 0.35,
            image: "https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg?w=2000"
          },
          {
            id: 4,
            name: "Milk",
            price: 1.99,
            image: "https://i5.walmartimages.com/asr/3592de4c-2d2d-4285-afbf-f0508775bd58_2.bb23225176016b4d5ce96c4efed80382.jpeg"
          },
          {
            id: 5,
            name: "Potatoes",
            price: 0.88,
            image: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA="
          },
          {
            id: 6,
            name: "Cheese",
            price: 1.33,
            image: "https://i5.walmartimages.com/asr/fda1d77e-44ec-4477-93b5-73d46cea8a44.69c68548f31c1b08884960b47b111b8e.jpeg"
          },
          {
            id: 7,
            name: "Bread",
            price: 3.45,
            image: "https://img.freepik.com/premium-photo/slice-bread-white-background-isolated-with-clipping-path_41722-1877.jpg?w=2000"
          },
          {
            id: 8,
            name: "Avocado",
            price: 3.20,
            image: "https://media.istockphoto.com/id/856586464/photo/two-slices-of-avocado.jpg?s=612x612&w=0&k=20&c=xaXU4gxSZx2nTn5XfTnWlpaJ8OMbh0MKRXMASoDJEJo="
          },
          {
            id: 9,
            name: "Chicken breasts",
            price: 4.13,
            image: "https://media.istockphoto.com/id/182372395/photo/chicken-breasts-against-white-background.jpg?s=612x612&w=0&k=20&c=kfjWyZmpZhtT8fVWjxBZGP35DIsn40VKoVJDt7MeVfc="
          },
          {
            id: 10,
            name: "Tomatoes",
            price: 2.34,
            image: "https://thumbs.dreamstime.com/b/fresh-tomatoes-cut-white-background-4712908.jpg"
          },
          {
            id: 11,
            name: "Strawberries",
            price: 1.89,
            image: "https://media.istockphoto.com/id/876503894/photo/strawberry-with-sliced-half-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=S77l7MU6n9RHER46JKoLfdCdgXr7YCz0ZtWLvptXElQ="
          },
          {
            id: 12,
            name: "Peanut butter",
            price: 0.99,
            image: "https://media.istockphoto.com/id/458541553/photo/jif-penut-butter.jpg?s=612x612&w=0&k=20&c=idTK8DbbOFV3EX9H0x0GGPbhzLdTaimA5YsXepIv_GY="
          },
          {
            id: 13,
            name: "Lettuce",
            price: 1.65,
            image: "https://i.pinimg.com/736x/58/42/10/584210d3e40ed884f21ae7306437a2ec.jpg"
          },
          {
            id: 14,
            name: "Salmon",
            price: 2.45,
            image: "https://img.freepik.com/premium-photo/fresh-salmon-fillet-with-basil-white-background_120872-2192.jpg"
          },
          {
            id: 15,
            name: "Ground beef",
            price: 1.98,
            image: "https://i5.walmartimages.com/asr/bd4bb7c1-43a8-4f75-b1be-f3c2d98fff56.39dda363a61de8a41ddd6521b2385d45.jpeg"
          },
          {
            id: 16,
            name: "Cucumber",
            price: 0.34,
            image: "https://www.vtfoodbank.org/wp-content/uploads/2015/11/the-superb-health-benefits-of-cucumber1.jpg"
          },
          {
            id: 17,
            name: "Onions",
            price: 0.31,
            image: "https://img.freepik.com/premium-photo/red-onion-isolated-white-background_319514-4769.jpg?w=2000"
          },
          {
            id: 18,
            name: "Rice",
            price: 2.44,
            image: "https://thumbs.dreamstime.com/b/raw-rice-bag-spilled-white-background-raw-white-rice-bag-white-background-close-up-146707505.jpg"
          },
          {
            id: 19,
            name: "Pasta",
            price: 3.88,
            image: "https://p1.pxfuel.com/preview/875/956/872/pasta-products.jpg"
          },
          {
            id: 20,
            name: "Yogurt",
            price: 2.39,
            image: "https://i.fbcd.co/products/resized/resized-750-500/e27a033b054b5f2517d9fa32a2b9c21a41422287f276855a8e2c7a7c3450d680.jpg"
          },
          {
            id: 21,
            name: "Oatmeal",
            price: 3.13,
            image: "https://thumbs.dreamstime.com/b/bowl-raw-oatmeal-white-background-150142005.jpg"
          },
          {
            id: 22,
            name: "Ice-cream",
            price: 2.22,
            image: "https://media01.stockfood.com/largepreviews/MzQ2MzA0Mjg2/11171106-Vanilla-Ice-Cream-Cone-on-a-White-Background.jpg"
          },
          {
            id: 23,
            name: "Pizza",
            price: 4.21,
            image: "https://thumbs.dreamstime.com/b/fresh-tasty-pizza-white-background-clipping-path-included-85746388.jpg"
          },
          {
            id: 24,
            name: "Ketchup",
            price: 2.00,
            image: "https://pixy.org/src/107/1076174.jpeg"
          },
          {
            id: 25,
            name: "Mayonnaise",
            price: 1.99,
            image: "https://i5.walmartimages.com/asr/3c0d7636-b6a6-4509-84f5-1e92e378b353.6423f1b82ff702c18a7c0b59166a4a54.jpeg"
          },
          {
            id: 26,
            name: "Olive oil",
            price: 2.67,
            image: "https://static.vecteezy.com/system/resources/previews/005/739/981/large_2x/ondoliva-extra-virgin-olive-oil-on-white-background-free-photo.jpg"
          },
          {
            id: 27,
            name: "Salt",
            price: 1.55,
            image: "https://media.istockphoto.com/id/1067295372/photo/salt-shaker-on-white-background.jpg?s=170667a&w=0&k=20&c=SuwEWTeccrVWYQaZEI5IqiQNIW_ESHkV37PqCApbz6s="
          },
          {
            id: 28,
            name: "Pepper",
            price: 1.89,
            image: "https://thumbs.dreamstime.com/b/red-green-yellow-bell-pepper-white-background-three-35580907.jpg"
          },
          {
            id: 29,
            name: "Sugar",
            price: 0.89,
            image: "https://img.freepik.com/premium-photo/sugar-ceramic-bowl-white-background_55883-580.jpg"
          },
          {
            id: 30,
            name: "Flour",
            price: 0.34,
            image: "https://previews.123rf.com/images/ddsignstock/ddsignstock1406/ddsignstock140600319/29077009-flour-with-wheat-in-a-wooden-bowl-on-a-white-background.jpg"
          },
          {
            id: 31,
            name: "Nuts",
            price: 2.46,
            image: "https://media.istockphoto.com/id/1125613619/photo/unshelled-peanuts-in-sack.jpg?s=612x612&w=0&k=20&c=eoVcrBn__-7mxY6pOFi6O4YPO6-l8H3Kg4g5CwUVrZo="
          },
          {
            id: 32,
            name: "Chips",
            price: 3.44,
            image: "https://images.wbmason.com/350/L_FTL44359.jpg"
          },
          {
            id: 33,
            name: "Iced tea",
            price: 1.49,
            image: "https://thumbs.dreamstime.com/b/can-lipton-ice-tea-drink-isolated-white-background-brand-sold-64329303.jpg"
          },
          


    ]

    return(
        <div>
            <SlideShow />
            <SearchBar placeholder = "Find your cheapest groccery!" data = {SearchData}/>

    
            <div className="grocery-cards-container">
                
                {groceries.map((grocery, index) => (
                    <div key={index} className="grocery-card">
                        <img className = "grocery-card-img" src={grocery.image} alt={grocery.name} style={{width:'100px', height: '100px'}}/>
                        <h3>{grocery.name}</h3>
                        <p className='p'>${grocery.price.toFixed(2)}</p>
                        <button className="button" style={{width:'100px', height: '100px'}}    >Add to Cart</button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default HomePage;