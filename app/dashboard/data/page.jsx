"use client"
import styles from "./data.module.css"
import Link from 'next/link'
import Pagination from '../../ui/dashboard/pagination/pagination'
import ToggleDiv from "@/app/ui/dashboard/toggle/toggle"

const DetailData = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Active User Base</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                        <td>UID</td>
                            <td>Name</td>
                            <td>Phone Number</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0001</td>
                            <td>User1</td>
                            <td>1234567890</td>
                            <td>
                                <div className={styles.buttons}>
                                <ToggleDiv></ToggleDiv>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>0004</td>
                            <td>User2</td>
                            <td>989898989</td>
                            <td>
                            <div className={styles.buttons}>
                                <ToggleDiv></ToggleDiv>
                                </div>
                            </td>
                        </tr>
                    </tbody>            
                </table>
                <Pagination></Pagination>


        </div>
    )
}

export default DetailData