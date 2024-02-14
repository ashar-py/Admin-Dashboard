import styles from "@/app/ui/dashboard/notifications/notifications.module.css"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const NotificationsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
            <span>What would you like to be notified about</span>
            <select>
                {/*Add options*/}
            </select>
            <button className={styles.add}><FaPlus></FaPlus></button>
            <button className={styles.remove}><FaMinus></FaMinus></button>
            </div>
            <div className={styles.bottom}>
                <span>Add email ids of person to be notified</span>
                <input type="email"></input>
                <button className={styles.add}><FaPlus></FaPlus></button>
                <button className={styles.remove}><FaMinus></FaMinus></button>
            </div>
        </div>
    )
}

export default NotificationsPage