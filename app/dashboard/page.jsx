import styles from "../ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import AreaGraph from "../ui/dashboard/chart/areagraph";
import LineGraph from "../ui/dashboard/chart/linegraph";
import BarGraph from "../ui/dashboard/chart/bargraph";

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
            <div className={styles.cards}>
                <Card 
                title="Total Customers this month"
                value="1,250"
                prev="1,000"
                profit={true}
                percent="+25"/>
                <Card 
                title="High Intent Leads"
                value="626"
                prev="578"
                profit={true}
                percent="+8"/>
                <Card 
                title="Low Intent Leads"
                value="2,002"
                prev="2,143"
                profit={false}
                percent="-6"/>
                <Card 
                title="Order Booking"
                value="62"
                prev="55"
                profit={true}
                percent="+12.7"/>
            </div>
            <AreaGraph/>
            <LineGraph/>
            <BarGraph/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    )
}

export default Dashboard