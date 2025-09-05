import styles from'./ProductCard.module.css'
import { useState } from 'react';
// import './ProductCard.css'

export function ProductCard({prod,
  price,
  background="blue",
  onPurchase,
  listnum,
  isFavorite,
  onFavorite})
  {
  // const [stockCount, setStockCount]=useState(prod.stockCount)
  const [showMore, setShowMore]=useState(prod.specification)
  // let stockCount= prod.stockCount
  // made use of local variables which do not rerender your ui,only store te value as a constant

    function handleClick(){
      // setStockCount((prevStockCount)=> prevStockCount-1);
      // stockCount= stockCount-1;
      // console.log("stockCount",stockCount);
      onPurchase(prod.id,prod.stockCount-1);
    }

    function handleTwoClicks(prod){
      // setStockCount(stockCount-2);
      // setStockCount((prevStockCount)=> prevStockCount-1);
      // setStockCount((prevStockCount)=> prevStockCount-1);
      alert(`You Purchased 2 ${prod.title}s`);
      onPurchase(prod.id,prod.stockCount-2);
    }

    function getProductTitle(title){
        return title;
    }

  return (
    // <article className="container" style={{background}}>
    <article className={styles.container} style={{background}}>
      <button className={styles.favorite} onClick={()=>onFavorite(prod.id)}>{isFavorite?'❤️':'🤍'}</button>
    <h2>{getProductTitle(prod.title)}</h2>
    <p> selling {prod.title} for ${price}</p>
    <button onClick={()=>setShowMore(!showMore)}>{showMore ? 'hide': 'show' }</button>
    {showMore && <ul className={styles.Specification}>
      <p>Specifications:</p>
      {prod.specification.map((specification,index)=>(
        <li key={index}>{specification}</li>
      ))}
    </ul>}<br></br>
    <img src={prod.ImageSrc} width="200px" height="200px" className={styles.ImageWithBorder}/>
    <Status stockCount={prod.stockCount}/>
    {prod.stockCount>0 &&(
      <>
      <p>Price: ${price}</p>
      <button onClick={()=>handleClick(prod)}>Buy for {listnum} </button>
      </>
      )}
      {prod.stockCount>1 &&
      <button onClick={()=>handleTwoClicks(prod)}>Buy 2</button>
      }
    </article>
  )
}  

function Status ({stockCount}){
  // if(stockCount ===0){
  //   return<p style={{fontSize:"14px",color:'lightsalmon'}}>Not available</p>
  // }

  // return<p style={{fontSize:"14px",color:'lightgreen'}}>{stockCount} items available right now</p>

  const NotAvailableTemplate=<p className={styles.NotAvailableTemplate}>Not available</p>
  // const NotAvailableTemplate=<p className='NotAvailableTemplate'>Not available</p>

  const AvailableTemplate= <p className={styles.AvailableTemplate}>{stockCount} items available right now</p>
  // const AvailableTemplate= <p className='AvailableTemplate'>{stockCount} items available right now</p>

  return stockCount===0 ? 
  (NotAvailableTemplate)
   :
  (AvailableTemplate)
}