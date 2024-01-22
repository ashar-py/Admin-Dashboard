import styles from "./card.module.css";
import { FcPositiveDynamic } from "react-icons/fc";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span className={styles.title}>Total Customers this month</span>
                <span className={styles.number}>
                    2,648<FcPositiveDynamic />
                </span>
                <span className={styles.detail}>
                    vs Prev 1,968<span className={styles.positive}>(+25%)</span>
                </span>
            </div>
        </div>
    )
}

export default Card