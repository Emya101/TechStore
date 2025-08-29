export function ProductCard({prod,price,background="blue",onPurchase,listnum,...restprops}){

    function getProductTitle(title){
        return title;
    }

  return (
    <article style={{
      background,
      border:"1px solid white",
      borderRadius:"8px",
      padding:"16px",
      textAlign:"center",
      justifyContent:"center",
      flexDirection:"column",
      width:"auto",
      height:"400px",
      
      }}>
    <h2>{getProductTitle(prod.title)}</h2>
    <p> Hello my friend,i have a list of {price}</p>
    <p> {prod.specification[0]}</p>
    <img src={prod.ImageSrc} width="200px" height="200px"/>
    <button onClick={()=>onPurchase(prod)}>Buy from {price} because {listnum} </button>
    </article>
  )
}  