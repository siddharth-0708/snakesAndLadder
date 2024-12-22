import styles from './Snakes.module.css';
function Snakes({data}){
    return (
        <div>
            <div className= {styles.snakes}>Snakes {data}!</div>
        </div>
    )
}
export default Snakes;