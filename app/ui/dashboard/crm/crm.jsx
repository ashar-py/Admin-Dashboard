import styles from "./crm.module.css";
import Image from "next/image";

const CRM = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/Salesforce.png" width="70" height="50"></Image>
                {/* <button className={styles.help}>Help</button> */}
            </div>
                <div className={styles.content}>
                <span className={styles.title}>Salesforce{/* Enter name */}</span>
                <span className={styles.detail}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore quisquam.
                </span>
                <button className={styles.connect}>Coming Soon</button>
            </div>
        </div>
    )
}

export default CRM