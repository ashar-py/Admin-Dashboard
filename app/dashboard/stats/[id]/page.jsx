//"use client";
import styles from "@/app/ui/dashboard/stats/singleStat/singleStat.module.css"
import Image from "next/image"
import Chatbot from "@/components/chat/chatbot"
import { fetchUser } from "@/app/lib/data";



  const SingleUserPage = async ({ params }) => {
  
    const { assistant_id } = params;
    const userData = await fetchUser(assistant_id);

    return (
        <div className={styles.container}>
            <span className={styles.title}>{userData.name}</span>
            <div className={styles.top}>
                <div className={styles.details}>
                    <span>Customer Details</span>
                    <div className={styles.content}>
                        Name: Rakesh Kumar<br></br>
                        Phone: 9898989898<br></br>
                        Product: XYZ<br></br>
                        Provider: ABC
                    </div>
                </div>
                <div className={styles.summary}>
                    <span>Call Summary</span>
                    <div className={styles.content}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio expedita, delectus dignissimos sed cupiditate magnam suscipit vero, alias nesciunt eum laudantium repellat nemo similique explicabo velit libero quibusdam in.
                    </div>
                </div>
                <div className={styles.lead}>
                    <span>Lead Quality</span>
                    <div className={styles.content}>
                        Customer Sentiment: Positive<br></br>
                        Lead Quality: High<br></br>
                        Recommended next steps: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorem, architecto, omnis nesciunt quasi soluta eum
                    </div>
                </div>
            </div>
            <div >
                <Chatbot/>
            </div>
            {/* <Image src="/Spinner.gif" width="80" height="80"></Image> */}
        </div>
        
    )
}

export default SingleUserPage
