import styles from "../socials/socials.module.css";
import Image from "next/image";

const CRM = ({name, logo, desc, signin}) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} width="70" height="50"></Image>
                {/* <button className={styles.help}>Help</button> */}
            </div>
                <div className={styles.content}>
                <span className={styles.title}>{name}</span>
                <span className={styles.detail}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore quisquam.
                </span>
                {signin ? <button className={styles.connect}>Connect</button>:<button className={styles.comingsoon}>Coming Soon</button>}
            </div>
        </div>
    )
}


export default CRM