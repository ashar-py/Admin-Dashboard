import styles from "@/app/ui/dashboard/stats/stats.module.css"
import Link from "next/link"
import Search from "@/app/ui/dashboard/search/search"


const CustomerStat = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search for a customer.."}></Search>
            </div>
            <h3>Active</h3>
            <div className={styles.active}>
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
                        <td><Link className={styles.link} href="/singleStat">Rakesh Kumar</Link></td>
                            <td>9898989898</td>
                            <td>15/01/2024 8:19pm</td>
                            <td>AI</td>
                            </tr>
                            </tbody>
                            </table>
                <button className={styles.expand}>Expand Table</button>
            </div>
            <h3>Closed and docs awaited</h3>
            <div className={styles.closed}>
            <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Phone Number</td>
                            <td>Last Active</td>
                            <td>Due since(days)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><Link className={styles.link} href="/singleStat">Rakesh Kumar</Link></td>
                            <td>9898989898</td>
                            <td>15/01/2024 8:19pm</td>
                            <td>0</td>
                            </tr>
                            </tbody>
                            </table>
                <button className={styles.expand}>Expand Table</button>
            </div>
            <h3>Docs recieved and link sent</h3>
            <div className={styles.received}>
            <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Phone Number</td>
                            <td>Last Active</td>
                            <td>Due since(days)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link className={styles.link} href="/singleStat">Rakesh Kumar</Link></td>
                            <td>9898989898</td>
                            <td>15/01/2024 8:19pm</td>
                            <td>0</td>
                            </tr>
                            </tbody>
                            </table>
                <button className={styles.expand}>Expand Table</button>
            </div>
            <h3>Archived</h3>
            <div className={styles.archived}>
            <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Phone Number</td>
                            <td>Last Active</td>
                            <td>Policy Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><Link className={styles.link} href="/singleStat">Rakesh Kumar</Link></td>
                            <td>9898989898</td>
                            <td>15/01/2024 8:19pm</td>
                            <td>Issued</td>
                            </tr>
                            </tbody>
                            </table>
                <button className={styles.expand}>Expand Table</button>
            </div>
        </div>
    )

}

export default CustomerStat