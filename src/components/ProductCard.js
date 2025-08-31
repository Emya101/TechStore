import styles from'./ProductCard.module.css'
// import './ProductCard.css'

export function ProductCard({prod,price,background="blue",onPurchase,listnum,...restprops}){

    function getProductTitle(title){
        return title;
    }

  return (
    // <article className="container" style={{background}}>
    <article className={styles.container} style={{background}}>
    <h2>{getProductTitle(prod.title)}</h2>
    <p> Hello my friend,i have a list of {price}</p>
    <p> {prod.specification[0]}</p>
    <img src={prod.ImageSrc} width="200px" height="200px"/>
    <Status stockCount={prod.stockCount}/>
    {prod.stockCount>0 &&(
      <button onClick={()=>onPurchase(prod)}>Buy from {price} because {listnum} </button>)}
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