import styles from "@/app/ui/dashboard/customers/customers.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from 'next/link'

const CustomerPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a client.."/>
                <Link href="/dashboard/customers/addCustomer">
                <button className={styles.addNew}>Add New</button>
                </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Business Name</td>
                            <td>Industry Type</td>
                            <td>Product Type</td>
                            <td>Contact Name</td>
                            <td>Contact No.</td>
                            <td>Address</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>InsureRight</td>
                            <td>Insurance</td>
                            <td>Bike</td>
                            <td>Rahul Tripathy</td>
                            <td>9898989898</td>
                            <td>172, Andheri, Mumbai, 400001</td>
                            <td>Trial</td>
                            <td>
                                <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.edit}`}>Edit</button>  
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>InsureRight</td>
                            <td>Insurance</td>
                            <td>Bike</td>
                            <td>Rahul Tripathy</td>
                            <td>9898989898</td>
                            <td>172, Andheri, Mumbai, 400001</td>
                            <td>Trial</td>
                            <td>
                                <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.edit}`}>Edit</button>  
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>InsureRight</td>
                            <td>Insurance</td>
                            <td>Bike</td>
                            <td>Rahul Tripathy</td>
                            <td>9898989898</td>
                            <td>172, Andheri, Mumbai, 400001</td>
                            <td>Trial</td>
                            <td>
                                <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.edit}`}>Edit</button>  
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>InsureRight</td>
                            <td>Insurance</td>
                            <td>Bike</td>
                            <td>Rahul Tripathy</td>
                            <td>9898989898</td>
                            <td>172, Andheri, Mumbai, 400001</td>
                            <td>Trial</td>
                            <td>
                                <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.edit}`}>Edit</button>  
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>            
                </table>

        </div>
    )
}

export default CustomerPage