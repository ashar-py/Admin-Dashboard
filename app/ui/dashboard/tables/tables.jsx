import styles from "./tables.module.css"
import Link from "next/link"

const Tables = () => {
    return (
        <div className={styles.container}>
        <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Phone Number</td>
                            <td>Last Active</td>
                            <td>Attended by</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><Link className={styles.link} href="./stats/singleStat">Rakesh Kumar</Link></td>
                            <td>9898989898</td>
                            <td>15/01/2024 8:19pm</td>
                            <td>AI</td>
                            </tr>
                            <tr>
                        <td><Link className={styles.link} href="./stats/singleStat">Mohan Prabhu</Link></td>
                            <td>7657637633</td>
                            <td>14/01/2024 8:19pm</td>
                            <td>AI</td>
                            </tr>
                            <tr>
                        <td><Link className={styles.link} href="./stats/singleStat">Sachin Patel</Link></td>
                            <td>7648892787</td>
                            <td>13/01/2024 7:20pm</td>
                            <td>Agent</td>
                            </tr>
                            </tbody>
                            </table>
        </div>
    )
}

export default Tables