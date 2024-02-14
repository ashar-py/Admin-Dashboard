import styles from "./socials.module.css";
import Image from "next/image";

const Socials = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/Messenger.png" width="50" height="50"></Image>
                <button className={styles.help}>Help</button>
            </div>
                <div className={styles.content}>
                <span className={styles.title}>Messenger{/* Enter name */}</span>
                <span className={styles.detail}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore quisquam.
                </span>
                <button className={styles.connect}>Sign In</button>
            </div>
        </div>
    )
}

export default Socials