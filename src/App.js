//C:\Users\emhen\OneDrive\Documents\Desktop\ReactPractice\reactpractice
import logo from './logo.svg';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import {Single} from './components/Single';
import {Property} from './components/Property';
import { ProductFilter } from './components/ProductFilter';
import styles from './App.module.css';

function App() {
    const products=[{
        id:1,
        ImageSrc:"/images/wireless headphones.jpg",
        title:"Wireless Headphones",
        specification:[
           "Bluetooth 5.0 connectivity",
            "Noise cancelling feature",
            "20 hours of battery life"
        ],
        stockCount:10,
    },{
        id: 2,
        ImageSrc:"images/SmartCase.jpg",
        title:"Smartphone Case",
        specification:[
            "Shock resistant design",
            "Fits most modern phones",
            "Available in multiple colors"
        ],
      stockCount:0},
      {
        id: 3,
        ImageSrc:"images/TV.jpg",
        title:"4K Ultra HD Monitor",
        specification:[
           "27-inch display",
            "1ms response time",
            "Adjustable stand"
        ],
        stockCount:100,
      }]

    const listnum=[
          "A chance to gain 20000 PC Optimum Points",
           "An Affordable 2 year Warranty",
           "Be part of the Anti-Plastic Waste Initiative"
    ]

    const price=["300","30","1000","2000"]

    const [filters, setFilters] = useState({
      price:{
      min:0,
      max:9999,
    },
    other:"Other Value",
    });

    const [favorites, setFavorites]= useState([])

    function handlePurchase(prod,price){
      alert(`you Purchased ${prod.title} which cost $${price}`)
    }

    function handleFavorite(prodId){
      if(favorites.includes(prodId)){
        //remove
        setFavorites((prevFavorites)=>prevFavorites.filter(id=> id !==prodId))
      }
      else{
        setFavorites((prevFavorites)=>[...prevFavorites,prodId])

      }
    }

    function handleFilter(key,value){
      setFilters((prevFilters)=> ({
          ...prevFilters,
          price:{
            ...prevFilters.price,
            [key]:value,
          }
      }))
    }

  return (
    <div className={styles.App}>
      <Property>
        {products.map((product,index)=> (
          <ProductCard 
          key={product.title}//dont use index if your list willhave reordered or deleted elements
          prod={product}
          background="stalegray"
          listnum={listnum[index]}
          price={price[index]}
          isFavorite={favorites.includes(product.id)}
          onPurchase={()=>handlePurchase(product,price[index])}
          onFavorite={()=>handleFavorite(product.id)}/>
        ))
        }
      </Property>

      <h2>Products filter by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter}/>
      <ul>
        {/* {products.map(({title,price}) => <li>
          {title} cost ${price}
          </li>)} */}

        {/* {products.map((product,index)=> price[index]>2000?(
          <li key={index}>{product.title} costs ${price[index]}</li>
        ):null )} */}

        {products.map((product,index)=>({
          ...product,
          price: Number(price[index])
        }))
        .filter(product=>product.price>=filters.price.min && product.price<= filters.price.max)
        .map(product=>(
          <Fragment key={product.title}>
          <hr className={styles.tinystyle}/>
          <p key={product.title}>
            {product.title} costs {product.price}
            </p>
          </Fragment>
        ))}
      </ul>
      <Single/>
    </div>
  );
}

export default App;
