import styles from'./Property.module.css'

export function Property(props){
    return(
    <>
    <h2>Supreme's Store</h2>
    <div className={styles.List}>{props.children}</div>
    </>
    )
}