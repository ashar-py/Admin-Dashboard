import styles from "@/app/ui/dashboard/customers/addCustomer/addCustomer.module.css";

const AddCutomer = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type='text' placeholder='Business Name' name='b_name' required />
                <input type='text' placeholder='Industry Type' name='ind_type' required />
                <select name="p_type" id="p_type" required>
                <option value="default">Choose a Product Type</option>
                    <option value="health">Health</option>
                    <option value="bike">Bike</option>
                    <option value="motor">Motor</option>
                    <option value="term">Term</option>
                </select>
                <input type='text' placeholder='Contact Name' name='c_name' required />
                <input type='phone' placeholder='Contact No.' name='c_no' required />
                <input type='email' placeholder='Contact Email' name='c_mail' required />
                <select name="enrol_type" id="enrol_type" required>
                <option value="default">Choose a Enrollment Type</option>
                    <option value="poc">PoC</option>
                    <option value="trial">Trial</option>
                    <option value="premium">Premium</option>
                </select>
                <textarea
                id="bill_address"
                rows="10"
                placeholder='Billing Address'
                name='bill_address' required>
                    </textarea>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default AddCutomer
