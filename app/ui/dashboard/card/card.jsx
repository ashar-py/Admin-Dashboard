import styles from "./card.module.css";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcNegativeDynamic } from "react-icons/fc";

const Card = ({
    title,
    value,
    prev,
    profit,
    percent
}
) => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span className={styles.title}>{title}</span>
                <span className={styles.number}>
                    {value}{profit?<FcPositiveDynamic/>:<FcNegativeDynamic/>}
                </span>
                <span className={styles.detail}>
                    vs Prev {prev}<span className={profit?styles.positive:styles.negative}>({percent}%)</span>
                </span>
            </div>
        </div>
    )
}

export default Card