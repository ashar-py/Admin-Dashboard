import styles from "@/app/ui/dashboard/integration/integration.module.css"
import Socials from "@/app/ui/dashboard/socials/socials"
import CRM from "@/app/ui/dashboard/crm/crm"

const Integrations = () => {
    return (
        <div className={styles.container}>
            <h4>Messaging Platforms</h4><hr></hr>
            <div className={styles.socials}>
                {/*Use map here*/}
                <Socials name="Messenger" logo="/Messenger.png" desc="" signin="true"></Socials>
                <Socials name="WhatsApp" logo="/whatsapp.png" desc="" signin={false}></Socials>
                <Socials name="Instagram" logo="/instagram.png" desc="" signin={false}></Socials>
                <Socials name="G-Mail" logo="/Gmail.png" desc="" signin={false}></Socials>
            </div>
            <h4>CRM Platforms</h4><hr></hr>
            <div className={styles.crm}>
                {/*Use map here*/}
                <CRM name="Salesforce" logo="/Salesforce.png" desc="" signin={false}></CRM>
                <CRM name="Hubspot" logo="/hubspot.png" desc="" signin="true"></CRM>
                <CRM name="Zoho" logo="/noavatar.png" desc="" signin="true"></CRM>
                <CRM name="Zapier" logo="/noavatar.png" desc="" signin={false}></CRM>
                
            </div>
        </div>
    )
}

export default Integrations