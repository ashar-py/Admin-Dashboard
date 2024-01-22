import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Trini AI</div>
            <div className={styles.address}> © All rights reserved</div>
        </div>
    )
}

export default Footer;