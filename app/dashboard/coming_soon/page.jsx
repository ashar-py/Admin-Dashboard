import styles from "@/app/ui/dashboard/common/common.module.css"
import Image from "next/image"

const CommonPage = () => {
    return (
        <div className={styles.container}>
            <Image src="/coming_soon.png" width="500" height="500"></Image>
        </div>
    )
}

export default CommonPage