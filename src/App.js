//C:\Users\emhen\OneDrive\Documents\Desktop\ReactPractice\reactpractice
import logo from './logo.svg';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import {Single} from './components/Single';
import {Property} from './components/Property';
import { ProductFilter } from './components/ProductFilter';
import styles from './App.module.css';
import { products as productsData } from './data/products';

function App() {
  const [products,setProducts]= useState(productsData)
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

    function handlePurchase(prodId,stockCount){
      // alert(`you Purchased ${title} which cost $${price}`)
      setProducts((prevProducts)=> prevProducts.map((product)=> product.id===prodId ? {...product, stockCount }: product))
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
          onPurchase={(prodId, newStockCount)=>handlePurchase(prodId, newStockCount)}
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
