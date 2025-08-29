import logo from './logo.svg';
import { Fragment } from 'react/jsx-runtime';
import { ProductCard } from './components/ProductCard';
import {Single} from './components/Single';
import {Property} from './components/Property';
import './App.css';

function App() {
    const products=[{
        ImageSrc:"images/bellorus.jpg",
        title:"imagine dragers",
        specification:[
           "manifest.json provides metadata",
           "manifest.json provides metadata",
           "Supreme is the best man fr(no glaze)"
        ],
    },{
        ImageSrc:"images/list.jpg",
        title:"imagine using lists",
        specification:[
           "manifest.json provides metadata",
           "manifest.json provides metadata",
           "Supreme is the best man fr(no glaze)"
        ],},
      {
        ImageSrc:"images/dragons.png",
        title:"imagine dragons",
        specification:[
           "manifest.json provides metadata",
           "manifest.json provides metadata",
           "Supreme is the best man fr(no glaze)"
        ],
      }]

    const listnum=[
          "manifest.json provides metadata",
           "manifest.json provides metadata",
           "Supreme is the best man fr(no glaze)"
    ]

    const price=["2010","2020","1920","2028"]

    function handlePurchase(prod,price){
      alert(`you clicked on ${prod.title} product which cost $${price}`)
    }

  return (
    <div className="App">
      <Property>
        {products.map((product,index)=> (
          <ProductCard 
          key={product.title}//dont use index if your list willhave reordered or deleted elements
          prod={product}
          listnum={listnum[index]}
          price={price[index]}
          onPurchase={()=>handlePurchase(product,price[index])}/>
        ))
        }
      </Property>

      <h2>Products which cost a 20,not a 19</h2>
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
        .filter(product=>product.price>2000)
        .map(product=>(
          <Fragment key={product.title}>
          <hr style={{borderColor: 'slategray'}}/>
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
