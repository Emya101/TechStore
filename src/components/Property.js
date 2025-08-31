import './Property.css'

export function Property(props){
    return(
    <>
    <h2>Products</h2>
    <div className="List">{props.children}</div>
    </>
    )
}