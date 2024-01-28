import styles from "@/app/ui/dashboard/stats/stats.module.css"
import Link from "next/link"
import Search from "@/app/ui/dashboard/search/search"
import Tables from "@/app/ui/dashboard/tables/tables"


const CustomerStat = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search for a customer.."}></Search>
            </div>
            <h3>Active</h3>
            <div className={styles.active}>
                <Tables></Tables>
                <button className={styles.expand}>Expand Table</button>
            </div>
            <h3>Closed and docs awaited</h3>
            <div className={styles.closed}>
            <Tables></Tables>
                <button className={styles.expand}>Expand Table</button>
            </div>
            <h3>Docs recieved and link sent</h3>
            <div className={styles.received}>
            <Tables></Tables>
                <button className={styles.expand}>Expand Table</button>
            </div>
            <h3>Archived</h3>
            <div className={styles.archived}>
            <Tables></Tables>
                <button className={styles.expand}>Expand Table</button>
            </div>
        </div>
    )

}

export default CustomerStat