//C:\Users\emhen\OneDrive\Documents\Desktop\ReactPractice\reactpractice
import logo from './logo.svg';
import { Fragment } from 'react/jsx-runtime';
import { ProductCard } from './components/ProductCard';
import {Single} from './components/Single';
import {Property} from './components/Property';
import styles from './App.module.css';

function App() {
    const products=[{
        ImageSrc:"/images/wireless headphones.jpg",
        title:"Wireless Headphones",
        specification:[
           "Bluetooth 5.0 connectivity",
            "Noise cancelling feature",
            "20 hours of battery life"
        ],
        stockCount:10,
    },{
        ImageSrc:"images/SmartCase.jpg",
        title:"Smartphone Case",
        specification:[
            "Shock resistant design",
            "Fits most modern phones",
            "Available in multiple colors"
        ],
      stockCount:0},
      {
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

    function handlePurchase(prod,price){
      alert(`you Purchased ${prod.title} which cost $${price}`)
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
          onPurchase={()=>handlePurchase(product,price[index])}/>
        ))
        }
      </Property>

      <h2>Products which cost less than $1000</h2>
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
        .filter(product=>product.price<1000)
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
