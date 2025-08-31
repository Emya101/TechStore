import styles from'./Property.module.css'

export function Property(props){
    return(
    <>
    <h2>Products</h2>
    <div className={styles.List}>{props.children}</div>
    </>
    )
}