import styles from "@/app/ui/dashboard/integration/integration.module.css"
import Socials from "@/app/ui/dashboard/socials/socials"
import CRM from "@/app/ui/dashboard/crm/crm"

const Integrations = () => {
    return (
        <div className={styles.container}>
            <h4>Messaging Platforms</h4><hr></hr>
            <div className={styles.socials}>
                {/*Use map here*/}
                <Socials></Socials>
                <Socials></Socials>
                <Socials></Socials>
                <Socials></Socials>
            </div>
            <h4>CRM Platforms</h4><hr></hr>
            <div className={styles.crm}>
                {/*Use map here*/}
                <CRM></CRM>
                <CRM></CRM>
                <CRM></CRM>
                <CRM></CRM>
                
            </div>
        </div>
    )
}

export default Integrations