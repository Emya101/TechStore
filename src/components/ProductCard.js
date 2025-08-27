export function ProductCard({prod,background="blue",...restprops}){

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
      width:"auto",
      height:"400px",
      
      }}>
    <h2>{getProductTitle(prod.title)}</h2>
    <p> Hello my friend,i have a list of {prod.price}</p>
    <p> {prod.specification[0]}</p>
    <img src="images/bellorus.jpg" {...restprops}/>
    </article>
  )
}  